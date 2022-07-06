import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import ClockwiseIco from "../../../Icons/ClockwiseIco";
import IcoClose from "../../../Icons/IcoClose";
import {
  CodeBlockCodeType,
  LoadCodeType,
  codeGithubType,
  responseGithubType,
  responseGistType,
} from "../../../types/interface";
import { chooseLanguageGist } from "../../Tree-Sitter/TreeSitter";
import { urlvalid, userdata, startParams } from "../../util/fuctions";
import EasyUrlParams from "../../util/EasyUrlParams";
import { add } from "../../Root-file/slice/callTreeSlice";
import "./LoadCode.css";

function LoadCode(props: LoadCodeType) {
  const code = useRef<HTMLInputElement | null>(null);
  const alert = useAlert();

  const [textValidURL, setTextValidURL] = useState("");
  const [enablebtn, setEnablebtn] = useState(false);
  const [btnload, setBtnload] = useState("Load");
  const [result, setResult] = useState<string | JSX.Element>("");
  const [list, setList] = useState(true);

  const listFn = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  );

  const dataBubbleTree: boolean = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  );

  const dispatch = useDispatch();
  // const listFn: CodeBlockCodeType[] = useSelector(
  //   (state: StoreFn) => state.addbubble.value
  // );

  function selectURL(from: string) {
    //urldata("repository").setRepoUrl(from);
    let repository = new EasyUrlParams("repository");
    if (from === undefined) {
    } else {
      repository.set(from);
    }
    let url = repository.get()?.value;
    if (!(url === undefined)) {
      const github = /https:\/\/github.com\//;
      if (github.test(url)) {
        getDetailsURL(url);
      } else {
        loadCodeTreeSitter(url);
      }
    }
  }

  useEffect(() => {
    let state = new EasyUrlParams("repository").get()?.value;
    if (!(state === "")) {
      selectURL(state as string);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    startParams(listFn);
    // Object.defineProperty(window, "fnlist", {value: listFn})
    // console.log(listFn)
    dispatch(add(!dataBubbleTree));
    // eslint-disable-next-line
  }, [listFn]);

  async function getDetailsURL(url: string) {
    setResult(
      <>
        <span className="LoadCode__textloading">
          <span className="LoadCode__ico">
            <ClockwiseIco size={20} />
          </span>
          Loading...
        </span>
      </>
    );
    const urlrepo: string = url;
    let regex =
      /(https:\/\/github.com\/)([\w\d\-_]+)(\/)([\w\d\-_]+)(\/)?((tree)(\/)([\w\d\-_]+))?/g;

    let validURL: boolean = regex.test(url);
    if (!validURL) {
    }

    const username: string = urlrepo.replace(regex, "$2");
    const repo: string = urlrepo.replace(regex, "$4");
    let rama: string = urlrepo.replace(regex, "$9");
    const urldata = {
      username: username,
      repo: repo,
      url: urlrepo,
      rama: rama,
    };
    if (urldata.rama === "") {
      let info = await getrepo(
        `https://api.github.com/repos/${urldata.username}/${urldata.repo}/branches`
      );
      let files = await getrepo(
        `https://api.github.com/repos/${urldata.username}/${urldata.repo}/git/trees/${info[0].name}?recursive=1`
      );
      searchJavascript(files.tree);
    } else {
      let files = await getrepo(
        `https://api.github.com/repos/${urldata.username}/${urldata.repo}/git/trees/${urldata.rama}?recursive=1`
      );
      searchJavascript(files.tree);
    }
  }

  function detectLanguage(path: string) {
    let patron: RegExpExecArray | string[] | null = /\.[a-z]{0,3}$/g.exec(path);
    if (patron === null) {
      patron = ["null"];
    }
    switch (patron[0]) {
      case ".ts":
        return "TypeScript";
      case ".tsx":
        return "TypeScript";
      case ".js":
        return "Javascript";
      case ".jsx":
        return "Javascript";
    }
  }

  function searchJavascript(files: responseGithubType[]) {
    const JavaScriptFiles: responseGithubType[] = files.filter(
      (element: responseGithubType) => {
        let regex_js = /\.js$|\.jsx$|\.ts$|\.tsx$/g;
        element.language = detectLanguage(element.path);
        return regex_js.test(element.path);
      }
    );
    if (JavaScriptFiles.length === 0) {
      setResult(
        <span className="LoadCode__msg">
          The github repo doesn't include any Javascript files
        </span>
      );
    } else {
      LoadAllFilesFromGithub(JavaScriptFiles);
    }
  }

  async function LoadAllFilesFromGithub(files: responseGithubType[]) {
    let files64: codeGithubType[] = await Promise.all(
      files.map((element: responseGithubType) => {
        return getrepo(element.url);
      })
    );
    let datafile: { code: string; from: string; language: string }[] = [];
    files64.forEach((element: codeGithubType, index: number) => {
      datafile.push({
        code: atob(element.content),
        from: files[index].path,
        language: files[index].language as string,
      });
    });

    getast(datafile);
  }

  async function getast(
    data: { code: string; from: string; language: string }[]
  ) {
    let TreeSitterAst = await Promise.all(
      data.map((element: { code: string; from: string; language: string }) => {
        let ast = chooseLanguageGist(
          element.code,
          element.from,
          element.language
        );
        return ast;
      })
    );

    let result: CodeBlockCodeType[] = [].concat.apply([], TreeSitterAst);
    result.forEach((e: CodeBlockCodeType, index: number) => {
      e.id = index;
    });

    props.setData(result);
    setResult("");
    resetValues();
    userdata();
    setList(!list);
    alert.success("Code loaded successfully");
  }

  async function getrepo(url: string) {
    try {
      const response = await fetch(url);

      if (response.status === 404) {
        setResult(
          <span className="LoadCode__msg">
            The gist doesn't exist. Check the URL and try again
          </span>
        );
        return [];
      }

      const data = await response.json();
      return data;
    } catch (error) {}
  }

  async function loadCodeTreeSitter(url: string) {
    // props.load(code.current.value, { reset: true });
    const value = url;
    const regexid = /([\w\d]+)/g;
    const allvalues = value.match(regexid);
    const id: string = (allvalues as [])[(allvalues as []).length - 1];
    setBtnload("Wait...");
    setEnablebtn(false);
    setResult(
      <>
        <span className="LoadCode__textloading">
          <span className="LoadCode__ico">
            <ClockwiseIco size={20} />
          </span>
          Loading...
        </span>
      </>
    );
    const readGist = await getCode(id);
    setBtnload("Load");
    setEnablebtn(true);
    const files: responseGistType[] = Object.values(readGist.files);
    const there_js =
      files.filter(
        (e: responseGistType) =>
          e.language === "JavaScript" || e.language === "TypeScript"
      ).length > 0;

    if (there_js) {
      // props.load(files[0].content, { reset: true });
      let onliJavascript: responseGistType[] = files.filter(
        (element: responseGistType) => {
          return (
            element.language === "JavaScript" ||
            element.language === "TypeScript"
          );
        }
      );

      props.load(onliJavascript);
      setResult("");
      resetValues();
      userdata();
      setList(!list);
      alert.success("Code loaded successfully");
    } else {
      setResult(
        <span className="LoadCode__msg">
          The gist doesn't include any Javascript files
        </span>
      );
    }
  }

  const getCode = async (id: string) => {
    try {
      let response = await fetch(
        `https://api.github.com/gists/${id}?gist_id=${id}`
      );

      if (response.status === 404) {
        setResult(
          <span className="LoadCode__msg">
            The gist doesn't exist. Check the URL and try again
          </span>
        );
        return {};
      }
      let data = response.json();
      return data;
    } catch (error) {
      setResult(
        <span className="LoadCode__msg">Error Internet Disconnected</span>
      );
      return {};
    }
  };

  function validURL(event: { target: { value: string } }) {
    let valid = urlvalid(event.target.value);

    if (valid) {
      setTextValidURL("");
      setEnablebtn(true);
    } else {
      setTextValidURL("URL Incorrect");
      setEnablebtn(false);
    }
  }

  function resetValues() {
    props.event.gist();
    setResult("");
    setTextValidURL("");
    setEnablebtn(false);
  }

  function focusInput() {
    (code.current as HTMLInputElement).focus();
  }

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      new EasyUrlParams("data").remove();
      selectURL((code.current as HTMLInputElement).value as string);
    }
  };

  return (
    <ReactModal
      isOpen={props.isOpen}
      className="LoadCode__Modal"
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
      onRequestClose={resetValues}
      onAfterOpen={focusInput}
      ariaHideApp={false}
    >
      <div className="LoadCode__header">
        <div>
          <span>Load Code from a Gist</span>
        </div>
        <div>
          <button title="Close" onClick={resetValues}>
            <IcoClose />
          </button>
        </div>
      </div>
      <div className="LoadCode">
        <h3 style={{ textAlign: "center", margin: "0px" }}>{result}</h3>
        <input
          ref={code}
          type="text"
          className="LoadCode__input"
          placeholder="https://gist.github.com/.../..."
          onChange={validURL}
          onKeyDown={handleKeyDown}
        />
        <div>
          <span className="text-error">{textValidURL}</span>
        </div>
        <div>
          <button
            className="LoadCode__btn"
            onClick={() => {
              new EasyUrlParams("data").remove();
              selectURL((code.current as HTMLInputElement).value as string);
            }}
            disabled={!enablebtn}
          >
            {btnload}
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

export default LoadCode;
