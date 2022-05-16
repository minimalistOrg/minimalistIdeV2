import { useState, useEffect, useRef } from "react";
import ChooseType from "../RenderTreeSitter/ChooseType";
import "./CodeBlock.css";
import IcoClose from "./IcoClose";
import IcoCollapse from "./IcoCollapse";

function CodeBlockTS(props: any): JSX.Element {
  // console.log(props.code, "CodeBlockTS");
  const [title, setTitle] = useState("Loading...");
  const [code, setCode] = useState({ type: "loading", text: "Loading" });
  const [params, setParams] = useState([]);
  const activeBubble = useRef<any>(null);
  const [activeclass,setActiveclass]= useState(["CodeBlock","CodeBlock__header"])

  useEffect(() => {
    if (!(props.code === undefined)) {
      if (props.code.node.children[3] === undefined) {
        setCode(props.code.node.children[1].children[2].children[2]);
        setTitle(props.code.node.children[1].children[0].text);
        setParams(props.code.node.children[1].children[2].children[0].children);
        // setParams("1");
      } else {
        setTitle(props.code.node.children[1].text);
        setCode(props.code.node.children[3]);
        setParams(props.code.node.children[2].children);
      }
    }
    if (!(props.call === undefined)) {
      props.call.fninfo.Bubble = activeBubble.current;
      setActiveclass(["CodeBlockHover CodeBlock","CodeBlock__header CodeBlock__header--hover"])
      // console.log("her")
      // activeBubble.current.classList.add("CodeBlockHover");
      // activeBubble.current.children[0].classList.add("CodeBlock__header--hover");
    }
  }, [props.code, props.call]);

  function fnHover(event: any) {
    // console.log(event.target.parentNode)
  }

  // console.log(params);

  return (
    <div className={activeclass[0]} data-testid="Bubble" ref={activeBubble}>
      <div className={activeclass[1]} data-testid="BubbleOrder">
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
          <code onMouseOver={fnHover}>
            <ChooseType info={code} />
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlockTS;
