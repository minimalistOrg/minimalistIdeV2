import { useState, useEffect } from "react";
import ChooseType from "../RenderTreeSitter/ChooseType";
import "./CodeBlock.css";
import IcoClose from "./IcoClose";
import IcoCollapse from "./IcoCollapse";

function CodeBlockTS(props: any): JSX.Element {
  // console.log(props.code, "CodeBlockTS");
  const [title, setTitle] = useState("Loading...");
  const [code, setCode] = useState({ type: "loading", text: "Loading" });
  const [params, setParams] = useState([]);

  useEffect(() => {
    if (!(props.code === undefined)) {
      if (props.code.node.children[3] === undefined) {
        setCode(props.code.node.children[1].children[2].children[2]);
        setTitle(props.code.node.children[1].children[0].text);
        setParams(props.code.node.children[1].children[2].children[0].children)
        // setParams("1");
      } else {
        setTitle(props.code.node.children[1].text);
        setCode(props.code.node.children[3]);
        setParams(props.code.node.children[2].children);
      }
    }
  }, [props.code]);

  // console.log(params);

  return (
    <div className="CodeBlock" data-testid="Bubble">
      <div className="CodeBlock__header" data-testid="BubbleOrder">
        <div className="CodeBlock__title">
          <div className="CodeBlock__collapse">
            <IcoCollapse />
          </div>
          {title}
          <span className="CodeBlock__arguments">
            {" "}
            {params.map((e: any, index: number) => {
              return (
                <span key={index}>
                  <ChooseType info={e} />
                </span>
              );
            })}{" "}
          </span>
        </div>
        <button
          className="CodeBlock__menu"
          data-testid="closeBubble"
          title="Close"
          onClick={props.closeBubble}
        >
          <IcoClose />{" "}
        </button>
      </div>
      <div className="CodeBlock__body" onClick={props.openBubble}>
        <pre>
          <code>
            <ChooseType info={code} />
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlockTS;
