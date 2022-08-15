import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import ClockwiseIco from "../../../icons/ClockwiseIco";
import IcoClose from "../../../icons/IcoClose";
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
import { setKey } from "../../Root-file/slice/jwtSlice";
import style from "./LoadCode.module.css";

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

  const validToken: string = useSelector(
    (state: { jwt: { key: string } }) => state.jwt.key
  );

  const apiUrl: string = useSelector(
    (state: { jwt: { url_api: string } }) => state.jwt.url_api
  );

  const dispatch = useDispatch();

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

  function getTime() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    return `-> ${hour}:${minute}`;
  }

  let memoryToken = "";

  async function login() {
    const token = await fetch(`${apiUrl}/api/v1/github/login`, {
      method: "post",
      credentials: "include",
    });
    const result = token.status;
    const { key } = await token.json();
    if (result === 200) {
      console.log("login successfully " + getTime());
      dispatch(setKey(key));
      memoryToken = key;
      setInterval(login, 14 * (60 * 1000)); //Refresh token each 14 min
      return true;
    } else {
      console.log("no login");
      return false;
    }
  }

  async function serverState() {
    const get = await fetch(`${apiUrl}/api/v1/server-state`, {
      method: "get",
      credentials: "include",
    });
    const { state } = await get.json();
    console.log("Ok server");
    return state;
  }

  useEffect(() => {
    const seccion = async () => {
      await serverState();
      await login();
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
      let info = await getrepo(
        `${urldata.username}/${urldata.repo}`,
        "branches=true"
      );
      let files = await getrepo(
        `${urldata.username}/${urldata.repo}`,
        `tree=${info[0].name}`
      );
      searchJavascript(files.tree);
    } else {
      let files = await getrepo(
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
      LoadAllFilesFromGithub(JavaScriptFiles);
    }
  }

  async function LoadAllFilesFromGithub(files: responseGithubType[]) {
    let files64: codeGithubType[] = await Promise.all(
      files.map((element: responseGithubType) => {
        return getrepo(
          `${urlData.username}/${urlData.repo}`,
          `blob=${element.sha}`
        );
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

  async function getrepo(repo: string, get: string) {
    try {
      const apiurl = `${apiUrl}/api/v1/github/repo?id=${repo}&${get}`;
      const sendToken = {
        headers: {
          Authorization: `Bearer ${
            memoryToken === "" ? validToken : memoryToken
          }`,
        },
      };
      const token = memoryToken === "" && validToken === "" ? {} : sendToken;

      const response = await fetch(apiurl, token);

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
    const value = url;
    const regexid = /([\w\d-_]+)/g;
    const allvalues = value.match(regexid);
    const id: string = (allvalues as [])[(allvalues as []).length - 1];
    setBtnload("Wait...");
    setEnablebtn(false);
    setResult(loadingElement);

    let readGist;

    if (allvalues!.length > 6) {
      readGist = await getCode(`${allvalues![5]}/${allvalues![6] as string}`);
    } else {
      readGist = await getCode(id);
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

  const getCode = async (id: string) => {
    try {
      const sendToken = {
        headers: {
          Authorization: `Bearer ${
            memoryToken === "" ? validToken : memoryToken
          }`,
        },
      };
      const token = memoryToken === "" && validToken === "" ? {} : sendToken;
      let response = await fetch(
        `${apiUrl}/api/v1/github/gist?id=${id}`,
        token
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
