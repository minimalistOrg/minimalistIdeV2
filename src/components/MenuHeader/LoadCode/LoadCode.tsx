import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import ClockwiseIco from "../../../icons/ClockwiseIco";
import IcoClose from "../../../icons/IcoClose";
import {
  CodeBlockCodeType,
  LoadCodeType,
  responseGithubType,
  responseGistType,
} from "../../../types/interface";
import { chooseLanguageGist } from "../../Tree-Sitter/TreeSitter";
import { urlvalid, userdata, startParams } from "../../util/fuctions";
import EasyUrlParams from "../../util/EasyUrlParams";
import { add } from "../../Root-file/slice/callTreeSlice";
import style from "./LoadCode.module.css";
import { apiService } from "../../../services/apiService";

function LoadCode(props: LoadCodeType) {
  const code = useRef<HTMLInputElement | null>(null);
  const alert = useAlert();

  const [textValidURL, setTextValidURL] = useState("");
  const [enablebtn, setEnablebtn] = useState(false);
  const [btnload, setBtnload] = useState("Load");
  const [result, setResult] = useState<string | JSX.Element>("");
  const [list, setList] = useState(true);
  const dispatch = useDispatch();

  const listFn = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  );

  const dataBubbleTree = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  );

  const validToken = useSelector(
    (state: { jwt: { key: string } }) => state.jwt.key
  );

  const apiUrl = useSelector(
    (state: { jwt: { url_api: string } }) => state.jwt.url_api
  );

  let memoryToken = "";
  const getRepo = apiService.getRepo(apiUrl, setResult, memoryToken, validToken)

  function selectURL(from: string) {
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
    const seccion = async () => {
      await apiService.login(apiUrl, dispatch, memoryToken)();
      let state = new EasyUrlParams("repository").get()?.value;

      if (!(state === "")) {
        selectURL(state as string);
      }
    };
    seccion();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    startParams(listFn);
    dispatch(add(!dataBubbleTree));
    // eslint-disable-next-line
  }, [listFn]);

  const loadingElement = (
    <>
      <span className={style.textloading}>
        <span className={style.ico}>
          <ClockwiseIco size={16} />
        </span>
        Loading...
      </span>
    </>
  );

  let urlData: any = {};

  async function getDetailsURL(url: string) {
    setResult(loadingElement);
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

    urlData = urldata;
    if (urldata.rama === "") {
      let info = await getRepo(
        `${urldata.username}/${urldata.repo}`,
        "branches=true"
      );
      let files = await getRepo(
        `${urldata.username}/${urldata.repo}`,
        `tree=${info[0].name}`
      );
      searchJavascript(files.tree);
    } else {
      let files = await getRepo(
        `${urldata.username}/${urldata.repo}`,
        `tree=${urldata.rama}`
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
        let regexJs = /\.js$|\.jsx$|\.ts$|\.tsx$/g;
        element.language = detectLanguage(element.path);
        return regexJs.test(element.path);
      }
    );
    if (JavaScriptFiles.length === 0) {
      setResult(
        <span className="LoadCode__msg">
          The github repo doesn't include any Javascript files
        </span>
      );
    } else {
      apiService.loadAllFiles(apiUrl, setResult, memoryToken, validToken)(JavaScriptFiles, urlData, getAst);
    }
  }

  async function getAst(
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

  async function loadCodeTreeSitter(url: string) {
    const value = url;
    const regexid = /([\w\d-_]+)/g;
    const allvalues = value.match(regexid);
    const id: string = (allvalues as [])[(allvalues as []).length - 1];
    setBtnload("Wait...");
    setEnablebtn(false);
    setResult(loadingElement);

    let readGist;

    if (allvalues!.length > 6) {
      readGist = await apiService.getCode(apiUrl, setResult, memoryToken, validToken)(`${allvalues![5]}/${allvalues![6] as string}`);
    } else {
      readGist = await apiService.getCode(apiUrl, setResult, memoryToken, validToken)(id);
    }
    setBtnload("Load");
    setEnablebtn(true);
    const files: responseGistType[] = Object.values(readGist.files);
    const thereJs =
      files.filter(
        (e: responseGistType) =>
          e.language === "JavaScript" ||
          e.language === "TypeScript" ||
          e.language === "TSX"
      ).length > 0;

    if (thereJs) {
      let onliJavascript: responseGistType[] = files.filter(
        (element: responseGistType) => {
          return (
            element.language === "JavaScript" ||
            element.language === "TypeScript" ||
            element.language === "TSX"
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
      className={style.modal}
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
      onRequestClose={resetValues}
      onAfterOpen={focusInput}
      ariaHideApp={false}
    >
      <div className={style.header}>
        <div className={style.headerContainer}>
          <span>Load Code from a Gist</span>
        </div>
        <div>
          <button className={style.close} title="Close" onClick={resetValues}>
            <IcoClose size={16} />
          </button>
        </div>
      </div>
      <div className={style.body}>
        <h3 style={{ textAlign: "center", margin: "0px" }}>{result}</h3>
        <div className={style.inputContent}>
          <input
            ref={code}
            type="text"
            className={style.input}
            placeholder="https://gist.github.com/.../..."
            onChange={validURL}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <span className={style.error}>{textValidURL}</span>
        </div>
        <div>
          <button
            className={style.btn}
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
