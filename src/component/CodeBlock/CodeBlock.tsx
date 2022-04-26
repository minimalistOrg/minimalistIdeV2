import { MutableRefObject, useEffect, useRef } from "react";
import "./CodeBlock.css";
import Resize from "./CodeBlock__Resize";
import ChooseType from "../RenderAST/ChooseType";
import { resetGlobal } from "../RenderAST/ASTtype/useGlobalCounter";
import { Coma } from "../RenderAST/ASTtype/Coma";
import {HoverIdentifier, hoverHeader, hoverHeaderLose} from "./Functions/HoverIdentifier";

interface CodeBlockEntry {
  title: string | undefined;
  argument: [];
  children: JSX.Element;
  onClick: (event: any) => void;
  onHoverevent: any;
  order: number;
  dataparams: string[];
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
          <span className="CodeBlock__arguments" onMouseOver={HoverIdentifier}>
            (
            {props.argument.map((e: any, index: any) => {
              return (
                <span key={index} data-params={props.dataparams[index]}>
                  <ChooseType info={e} />
                  <span>{Coma(index, long)}</span>
                </span>
              );
            })}
            )
          </span>
        </div>
        <button className="CodeBlock__menu">X</button>
      </div>
      <div className="CodeBlock__body" onMouseOver={HoverIdentifier}>
        <pre>
          <code ref={CodeTxt}>{props.children}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
