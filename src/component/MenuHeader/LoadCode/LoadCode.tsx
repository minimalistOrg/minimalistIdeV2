import { useRef, useState } from "react";
import { useAlert } from "react-alert";
import ReactModal from "react-modal";
import ClockwiseIco from "../../../Icons/ClockwiseIco";
import IcoClose from "../../CodeBlock/IcoClose";
import "./LoadCode.css";

function LoadCode(props: any) {
  const code = useRef<any>(null);
  const alert= useAlert()

  const [textValidURL, setTextValidURL] = useState("");
  const [enablebtn, setEnablebtn] = useState(false);
  const [btnload, setBtnload] = useState("Load");
  const [result, setResult] = useState<any>("");

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
      alert.success("Code loaded successfully")
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
    const regex = /(https:\/\/gist.github.com\/[\w\d-]+\/[\w\d]+\/?)/g;
    const evaluation = regex.test(event.target.value);
    // console.log(evaluation);
    if (evaluation) {
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
            onClick={loadCodeTreeSitter}
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
