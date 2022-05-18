import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CallTree.css";
import React from "react";
import ListNested from "./icons/ListNested";

function CallTree(props: any) {
  const dataBubbleTree = useSelector((state: any) => state.callTree.value);
  const [opentree, setOpentree] = useState(true);

  useEffect(() => {
    // console.log(TreeCall, dataBubbleTree)
    // eslint-disable-next-line
  }, [dataBubbleTree]);

  const style: any = {
    display: "flex",
    flexDirection: "column",
  };

  function hoverBubbles(e: any) {
    // console.log(e);
    if (e.element === null) {
      e.Bubble().classList.add("CodeBlockHover");
      e.Bubble().children[0].classList.add("CodeBlock__header--hover");
    } else {
      e.element.classList.add("CallExpressionHover");
      e.Bubble().classList.add("CodeBlockHover");
      e.Bubble().children[0].classList.add("CodeBlock__header--hover");
    }
  }

  function hoverBubblesOut(e: any) {
    if (e.element === null) {
      e.Bubble().classList.remove("CodeBlockHover");
      e.Bubble().children[0].classList.remove("CodeBlock__header--hover");
    } else {
      e.element.classList.remove("CallExpressionHover");
      e.Bubble().classList.remove("CodeBlockHover");
      e.Bubble().children[0].classList.remove("CodeBlock__header--hover");
    }
  }

  const TreeLi = (input: any) => {
    return (
      <ul style={style}>
        {input.map((e: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <li style={{ order: e.order }} data-testid="calltree">
                <span>
                  <span
                    className="pointer liBubble"
                    onMouseOver={() => hoverBubbles(e)}
                    onMouseLeave={() => hoverBubblesOut(e)}
                  >
                    {e.name}
                  </span>
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
