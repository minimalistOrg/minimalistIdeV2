import { useRef, useState } from "react";
import ReactModal from "react-modal";
import IcoClose from "../../CodeBlock/IcoClose";
import "./LoadCode.css";

function LoadCode(props: any) {
  const code = useRef<any>(null);

  const [textValidURL, setTextValidURL] = useState("");
  const [enablebtn, setEnablebtn] = useState(false);
  const [btnload, setBtnload] = useState("Load");
  const [result, setResult] = useState("");

  async function loadCodeTreeSitter() {
    // props.load(code.current.value, { reset: true });
    const value = code.current.value;
    const regexid = /([\w\d]+)/g;
    const allvalues = value.match(regexid);
    const id = allvalues[allvalues.length - 1];
    setBtnload("Wait...");
    setEnablebtn(false);
    setResult("Loading...");
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
      setResult("successful upload");
      resetValues();
    } else {
      setResult("Gist does not include jsx or js files");
      console.error("it is not a JavaScript file");
    }
  }

  const getCode = async (id: any) => {
    let response = await fetch(
      `https://api.github.com/gists/${id}?gist_id=${id}`
    );

    // console.log(response)
    if (response.status === 404) {
      setResult("Error 404");
      return {};
    }
    let data = response.json();
    return data;
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

  return (
    <ReactModal
      isOpen={props.isOpen}
      className="LoadCode__Modal"
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
      onRequestClose={resetValues}
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
        <h3 style={{ margin: "0px" }}>{result}</h3>
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
