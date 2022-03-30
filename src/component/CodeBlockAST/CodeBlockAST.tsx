import { MutableRefObject, useEffect, useRef } from "react";
import AstToCode from "../AstToCode/AstToCode";
import "./CodeBlockAST.css";
import Resize from "./CodeBlockAST__Resize";

interface CodeBlockEntry {
  title: string;
  argument: string;
  // children: string;
  body: any;
}

function CodeBlockAST(props: CodeBlockEntry): JSX.Element {
  //Genera una instacia de Resize para cada burbuja
  const Bubble = useRef<HTMLDivElement | null>(null);
  const CodeTxt = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const IDBubble: HTMLDivElement | null = Bubble.current;
    const IDCode: MutableRefObject<HTMLElement | null> = CodeTxt;
    Resize(IDBubble, IDCode);
    // console.log(IDBubble)
  }, []);

  return (
    <div className="CodeBlock" ref={Bubble}>
      <div className="CodeBlock__header">
        <div className="CodeBlock__title">
          {props.title}
          <span className="CodeBlock__arguments">({props.argument})</span>
        </div>
        <button className="CodeBlock__menu">...</button>
      </div>
      <div className="CodeBlock__body">
        <pre>
          <code ref={CodeTxt}>
            <AstToCode body={props.body}/>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlockAST;
