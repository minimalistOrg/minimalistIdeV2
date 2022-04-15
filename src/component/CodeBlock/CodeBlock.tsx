import { MutableRefObject, useEffect, useRef } from "react";
import "./CodeBlock.css";
import Resize from "./CodeBlock__Resize";
import ChooseType from "../RenderAST/ChooseType";
import { resetGlobal } from "../RenderAST/ASTtype/useGlobalCounter";
import {Coma} from "../RenderAST/ASTtype/Coma"

interface CodeBlockEntry {
  title: string | undefined;
  argument: [];
  children: JSX.Element;
  onClick: (event:any) => void;
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

  const long:number = props.argument.length;

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
                  <span>{Coma(index,long)}</span>
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
