import { MutableRefObject, useEffect, useRef } from "react";
import "./CodeBlock.css";
import Resize from "./CodeBlock__Resize";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-light.css";

interface CodeBlockEntry {
  title: string;
  argument: string;
  children: string;
}

function CodeBlock(props: CodeBlockEntry): JSX.Element {
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
          <code
            ref={CodeTxt}
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(props.children,{language: "javascript"}).value,
            }}
          ></code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
