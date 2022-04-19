import { MutableRefObject, useEffect, useRef } from "react";
import "./CodeBlock.css";
import Resize from "./CodeBlock__Resize";
import ChooseType from "../RenderAST/ChooseType";
import { resetGlobal } from "../RenderAST/ASTtype/useGlobalCounter";
import { Coma } from "../RenderAST/ASTtype/Coma";

interface CodeBlockEntry {
  title: string | undefined;
  argument: [];
  children: JSX.Element;
  onClick: (event: any) => void;
  onHoverevent: any;
  order: number;
}

function CodeBlock(props: CodeBlockEntry): JSX.Element {
  //Genera una instacia de Resize para cada burbuja
  const Bubble = useRef<HTMLDivElement | null>(null);
  const CodeTxt = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const IDBubble: HTMLDivElement | null = Bubble.current;
    const IDCode: MutableRefObject<HTMLElement | null> = CodeTxt;
    Resize(IDBubble, IDCode);
    // console.log(NRender)
    // console.log(IDBubble)
    resetGlobal(1);
  }, []);

  const long: number = props.argument.length;

  function hoverHeader(e: any) {
    const grandparentHover =
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode;

    e.currentTarget.parentNode.classList.add("CodeBlockHover");
    const style = document.createElement("style");
    style.id = "titleHover";
    style.innerHTML = `
.${grandparentHover.classList.value}:hover >
.pointRef > 
.CodeBlock >
.CodeBlock__body >
pre >
code .ast-function-${e.currentTarget.getAttribute(
      "data-title"
    )}-${e.currentTarget.getAttribute("data-order")}
{
  background-color: var(--bg-highligth-function);
  transition: var(--bgt-bubble-header);
}
      `;
    document.body.appendChild(style);
  }
  function hoverHeaderLose(e: any) {
    e.currentTarget.parentNode.classList.remove("CodeBlockHover");
    document.getElementById("titleHover")?.remove();
  }

  return (
    <div
      className="CodeBlock"
      ref={Bubble}
      onClick={(e) => props.onClick(e)}
      onMouseOverCapture={(e) => props.onHoverevent(e)}
    >
      <div
        className="CodeBlock__header"
        data-order={props.order}
        onMouseOut={hoverHeaderLose}
        onMouseOver={hoverHeader}
        data-title={props.title}
      >
        <div className="CodeBlock__title">
          {props.title}
          <span className="CodeBlock__arguments">
            (
            {props.argument.map((e: any, index: any) => {
              return (
                <span key={index}>
                  <ChooseType info={e} />
                  <span>{Coma(index, long)}</span>
                </span>
              );
            })}
            )
          </span>
        </div>
        <button className="CodeBlock__menu">...</button>
      </div>
      <div className="CodeBlock__body">
        <pre>
          <code ref={CodeTxt}>{props.children}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
