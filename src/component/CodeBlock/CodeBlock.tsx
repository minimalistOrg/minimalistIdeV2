import { MutableRefObject, useEffect, useRef, useState } from "react";
import "./CodeBlock.css";
import Resize from "./CodeBlock__Resize";
import ChooseType from "../RenderAST/ChooseType";
import { resetGlobal } from "../RenderAST/ASTtype/useGlobalCounter";
import { Coma } from "../RenderAST/ASTtype/Coma";
import {
  HoverIdentifier,
  hoverHeader,
  hoverHeaderLose,
  close,
} from "./Functions/HoverIdentifier";
import IcoCollapse from "./IcoCollapse";
import { BubbleCollapse, maxHeightBody } from "./Functions/BubbleCollapse";
import IcoClose from "./IcoClose";
import { useDispatch, useSelector } from "react-redux";
import { setclose } from "../Root-file/slice/callTreeSlice";

interface CodeBlockEntry {
  title: string | undefined;
  argument: [];
  children: JSX.Element;
  onClick: (event: any) => void;
  onHoverevent: any;
  order: number;
  dataparams: string[];
  entryPoint: any;
  id: any;
}

function CodeBlock(props: CodeBlockEntry): JSX.Element {
  const dispatch = useDispatch();
  const stateTreeClose = useSelector<any>((state) => state.callTree.close);
  // console.log(stateTree)

  //Genera una instacia de Resize para cada burbuja
  const Bubble = useRef<HTMLDivElement | null>(null);
  const CodeTxt = useRef<HTMLElement | null>(null);
  const [recoveryHeight, setRecoveryHeight] = useState<any>(true);

  useEffect(() => {
    const IDBubble: HTMLDivElement | null = Bubble.current;
    const IDCode: MutableRefObject<HTMLElement | null> = CodeTxt;
    Resize(IDBubble, IDCode);
    // console.log(NRender)
    // console.log(IDBubble)
    resetGlobal(1);
    maxHeightBody(IDBubble);
    // console.log(stateTree)
  }, [recoveryHeight]);

  const long: number = props.argument.length;

  return (
    <div
      id={"id" + props.id}
      className="CodeBlock"
      data-testid="Bubble"
      ref={Bubble}
      onClick={(e) => props.onClick(e)}
      onMouseOverCapture={(e) => props.onHoverevent(e)}
    >
      <div
        className="CodeBlock__header"
        data-testid="BubbleOrder"
        data-order={props.order}
        onMouseOut={hoverHeaderLose}
        onMouseOver={hoverHeader}
        data-title={props.title}
      >
        <div className="CodeBlock__title">
          <div className="CodeBlock__collapse" onClick={BubbleCollapse}>
            <IcoCollapse />
          </div>
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
        <button
          className="CodeBlock__menu"
          data-testid="closeBubble"
          title="Close"
          onClick={(e) => {
            close(e, props.entryPoint);
            dispatch(setclose(!stateTreeClose));
            //dispatch(add(! stateTree))
            // console.log(stateTreeClose)
            setRecoveryHeight(!recoveryHeight);
          }}
        >
          <IcoClose />
        </button>
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
