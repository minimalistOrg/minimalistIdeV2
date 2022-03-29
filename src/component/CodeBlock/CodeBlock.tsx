import {useEffect,useRef} from "react"
import "./CodeBlock.css";
import Resize from "./CodeBlock__Resize"

interface CodeBlockEntry {
  title: string;
  argument: string;
  children: string;
}

function CodeBlock(props: CodeBlockEntry) {
//Genera una instacia de Resize para cada burbuja
  const Bubble= useRef(null)
  const CodeTxt= useRef(null)

  useEffect(()=>{
    const IDBubble= Bubble.current
    const IDCode= CodeTxt
    Resize(IDBubble,IDCode);
    // console.log(IDBubble)
  },[])
  
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
        <code ref={CodeTxt}>{props.children.toString()}</code>
      </div>
    </div>
  );
}

export default CodeBlock;
