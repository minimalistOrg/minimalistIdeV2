import { useRef } from "react";
import "./LoadCode.css";

function LoadCode(props: any) {
  const code = useRef<any>(null);
  function loadCodeTreeSitter() {
    props.load(code.current.value,{reset: true});
  }

  return (
    <>
      <p>Area for test LoadCode</p>
      <div className="LoadCode">
        <textarea
          ref={code}
          cols={30}
          rows={10}
          style={{ resize: "none" }}
          placeholder="Enter Code"
        ></textarea>
        <br />
        <button className="LoadCode__btn" onClick={loadCodeTreeSitter}>
          Load Code
        </button>
      </div>
    </>
  );
}

export default LoadCode;
