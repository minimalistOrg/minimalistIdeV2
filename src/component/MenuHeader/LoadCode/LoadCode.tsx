import { useRef, useState } from "react";
import { useAlert } from "react-alert";
import ReactModal from "react-modal";
import ClockwiseIco from "../../../Icons/ClockwiseIco";
import IcoClose from "../../CodeBlock/IcoClose";
import { test } from "../../Tree-Sitter/TreeSitter";
import "./LoadCode.css";

function LoadCode(props: any) {
  const code = useRef<any>(null);
  const alert = useAlert();

  const [textValidURL, setTextValidURL] = useState("");
  const [enablebtn, setEnablebtn] = useState(false);
  const [btnload, setBtnload] = useState("Load");
  const [result, setResult] = useState<any>("");

  function selectURL() {
    const github = /https\:\/\/github.com\//;
    if (github.test(code.current.value)) {
      // console.log(code.current.value);
      getDetailsURL(code.current.value);
    } else {
      loadCodeTreeSitter();
    }
  }

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
    const urlrepo = url;
    let regex =
      /(https:\/\/github.com\/)([\w\d\-\_]+)(\/)([\w\d\-\_]+)(\/)?((tree)(\/)([\w\d\-\_]+))?/g;

    let validURL = regex.test(url);
    if (!validURL) {
      console.error("url incorrect");
    }

    const username = urlrepo.replace(regex, "$2");
    const repo = urlrepo.replace(regex, "$4");
    let rama = urlrepo.replace(regex, "$9");
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
    // console.log(urldata);
  }

  function searchJavascript(files: any) {
    // console.log(files);
    const JavaScriptFiles = files.filter((element: any) => {
      let regex_js = /\.js$|\.jsx$/g;
      return regex_js.test(element.path);
    });
    if (JavaScriptFiles.length === 0) {
      setResult(
        <span className="LoadCode__msg">
          The github repo doesn't include any Javascript files
        </span>
      );
    } else {
      // console.log(JavaScriptFiles);
      LoadAllFilesFromGithub(JavaScriptFiles);
    }
  }

  async function LoadAllFilesFromGithub(files: any) {
    let files64 = await Promise.all(
      files.map((element: any) => {
        return getrepo(element.url);
      })
    );
    // console.log(files);
    let datafile: any = [];
    files64.forEach((element: any, index: number) => {
      datafile.push({ code: atob(element.content), from: files[index].path });
    });

    // console.log(datafile);
    getast(datafile);
  }

  async function getast(data: any) {
    let TreeSitterAst = await Promise.all(
      data.map((element: any) => {
        let ast = test(element.code, element.from);
        return ast;
      })
    );

    let result = [].concat.apply([], TreeSitterAst);

    result.forEach((e: any, index: number) => {
      e.id = index;
    });

    // console.log(result);
    props.setData(result);
    setResult("");
    resetValues();
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
    } catch (error) {
      console.error(error);
    }
  }

  async function loadCodeTreeSitter() {
    // props.load(code.current.value, { reset: true });
    const value = code.current.value;
    const regexid = /([\w\d]+)/g;
    const allvalues = value.match(regexid);
    const id = allvalues[allvalues.length - 1];
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
    const files: any = Object.values(readGist.files);
    const there_js =
      files.filter((e: any) => e.language === "JavaScript").length > 0;

    // console.log(there_js);
    if (there_js) {
      // props.load(files[0].content, { reset: true });
      let onliJavascript = files.filter((element: any) => {
        return element.language === "JavaScript";
      });
      props.load(onliJavascript);
      // console.log(onliJavascript);
      setResult("");
      resetValues();
      alert.success("Code loaded successfully");
    } else {
      setResult(
        <span className="LoadCode__msg">
          The gist doesn't include any Javascript files
        </span>
      );
      console.error("it is not a JavaScript file");
    }
  }

  const getCode = async (id: any) => {
    try {
      let response = await fetch(
        `https://api.github.com/gists/${id}?gist_id=${id}`
      );

      // console.log(response);
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
      console.error(error);
      return {};
    }
  };

  function validURL(event: any) {
    const regex = /(https:\/\/gist.github.com\/[\w\d-\_]+\/[\w\d\-\_]+\/?)/;
    const regex_git_branch =
      /(https:\/\/github.com\/)([\w\d\-\_]+)(\/)([\w\d\-\_]+)(\/)tree\/([\w\d\-\_]+)\/?/;
    const regex_git = /https:\/\/github.com\/([\w\d\-\_]+)\/([\w\d\-\_]+)\/?/;
    const evaluation = regex.test(event.target.value);
    const evaluation2 = regex_git_branch.test(event.target.value);
    const evaluation3 = regex_git.test(event.target.value);
    // console.log(evaluation,evaluation2,evaluation3);
    if (evaluation || evaluation2 || evaluation3) {
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
    code.current.focus();
    // console.log("hi");
  }

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
        />
        <div>
          <span className="text-error">{textValidURL}</span>
        </div>
        <div>
          <button
            className="LoadCode__btn"
            onClick={selectURL}
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
