import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";
import "./CallTree.css";
import React from "react";
import ListNested from "../../Icons/ListNested";
import IconEye from "../../Icons/IconEye";
import IconEyeSlash from "../../Icons/IconEyeSlash";
import {
  CallTreeType,
  ObjTree,
  CodeBlockCodeType,
} from "../../types/interface";

function CallTree(props: CallTreeType) {
  // console.log(props)
  const dataBubbleTree: boolean = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  );

  const listFN = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  );
  // console.log(dataBubbleTree)
  const [opentree, setOpentree] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(add(!dataBubbleTree));
    // eslint-disable-next-line
  }, [dataBubbleTree,listFN]);

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  function hoverBubbles(e: ObjTree) {
    // console.log(e);
    if (e.element() === null) {
    // console.log(e.Bubble)
      e.Bubble()?.classList.add("CodeBlockHover");
      e.Bubble()?.children[0].classList.add("CodeBlock__header--hover");
    } else {
      e.element()?.classList.add("CallExpressionHover");
      e.Bubble()?.classList.add("CodeBlockHover");
      e.Bubble()?.children[0].classList.add("CodeBlock__header--hover");
    }
  }

  function hoverBubblesOut(e: ObjTree) {
    if (e.element() === null) {
      e.Bubble()?.classList.remove("CodeBlockHover");
      e.Bubble()?.children[0].classList.remove("CodeBlock__header--hover");
    } else {
      e.element()?.classList.remove("CallExpressionHover");
      e.Bubble()?.classList.remove("CodeBlockHover");
      e.Bubble()?.children[0].classList.remove("CodeBlock__header--hover");
    }
  }

  function ToggleHidden(show: ObjTree): { element: JSX.Element; msj: string } {
    if (show.visibility) {
      // console.log(show)
      if (show.Bubble() === null) {
        setTimeout(() => {
          show.Bubble()?.classList.remove("d-none");
        }, 100);
      } else {
        show.Bubble()?.classList.remove("d-none");
      }
      return {
        element: <IconEye />,
        msj: "hidden",
      };
    } else {
      if (show.Bubble() === null) {
        setTimeout(() => {
          show.Bubble()?.classList.add("d-none");
        }, 100);
      } else {
        show.Bubble()?.classList.add("d-none");
      }
      return {
        element: <IconEyeSlash />,
        msj: "show",
      };
    }
  }

  // console.log(props.data)
  function GetName(data: any) {
    if(listFN[data.index] === undefined){
    return ""
    }else{
    let fnName = listFN[data.index];
    // console.log(fnName)
     return fnName.name
    }
  }

  const TreeLi = (input: ObjTree[]): JSX.Element => {
    return (
      <ul style={style}>
        {input.map((e: ObjTree, index: number) => {
          return (
            <React.Fragment key={index}>
              <li style={{ order: e.order }} data-testid="calltree">
                <span className="li-container">
                  <span
                    className="pointer liBubble"
                    onMouseOver={() => hoverBubbles(e)}
                    onMouseLeave={() => hoverBubblesOut(e)}
                  >
                    {GetName(e)}
                  </span>
                  <button
                    className="btn-eye"
                    title={ToggleHidden(e).msj}
                    onClick={() => {
                      e.visibility = !e.visibility;
                      dispatch(add(!dataBubbleTree));
                      // console.log(e);
                    }}
                  >
                    {ToggleHidden(e).element}
                  </button>
                </span>
                {TreeLi(e.value)}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    );
  };

  function toogleBtntree(state: boolean) {
    if (state) {
      return "CallTree--active";
    } else {
      return "";
    }
  }

  return (
    <section className="CallTree">
      <div
        data-testid="calltreeBar"
        className={`CallTree__bar ${toogleBtntree(opentree)}`}
      >
        <div className="CallTree__listToggle">
          <button
            className="CallTree__listToggle-btn"
            data-testid="calltreeBtn"
            onClick={() => {
              setOpentree(!opentree);
            }}
          >
            <ListNested w="24" h="24" />
          </button>
        </div>
      </div>
      <div
        data-testid="calltreeContainer"
        className={`CallTree__list ${toogleBtntree(opentree)}`}
      >
        {TreeLi(props.data)}
      </div>
    </section>
  );
}

export default CallTree;
