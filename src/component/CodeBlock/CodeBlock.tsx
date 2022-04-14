import { MutableRefObject, useEffect, useRef } from "react";
import "./CodeBlock.css";
import Resize from "./CodeBlock__Resize";
import ChooseType from "../RenderAST/ChooseType";
import { resetGlobal } from "../RenderAST/ASTtype/useGlobalCounter";

interface CodeBlockEntry {
  title: string | undefined;
  argument: any;
  children: any;
  onClick: any;
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

  const long = props.argument.length;

  function coma(actual: number) {
    if (long - 1 === actual) {
      return "";
    } else {
      return " , ";
    }
  }

  return (
    <div className="CodeBlock" ref={Bubble} onClick={(e) => props.onClick(e)}>
      <div className="CodeBlock__header">
        <div className="CodeBlock__title">
          {props.title}
          <span className="CodeBlock__arguments">
            (
            {props.argument.map((e: any, index: any) => {
              return (
                <span key={index}>
                  <ChooseType info={e} />
                  <span>{coma(index)}</span>
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
