import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CallTree.css";
import React from "react";
import ListNested from "./icons/ListNested";

function CallTree(props: any) {
  const dataBubbleTree = useSelector((state: any) => state.callTree.value);

  useEffect(() => {
    // console.log(TreeCall, dataBubbleTree)
    // eslint-disable-next-line
  }, [dataBubbleTree]);

  const style: any = {
    display: "flex",
    flexDirection: "column",
  };

  function hoverBubbles(e: any) {
    var sheet = window.document.styleSheets[0];
    sheet.insertRule(
      `.grandparentHover-${e.order} > .pointRef > #id${e.id}{box-shadow: var(--bs-bubble); 
                      transition: var(--bst-bubble); }`,
      sheet.cssRules.length
    );
    sheet.insertRule(
      `.grandparentHover-${e.order} > .pointRef > #id${e.id} > .CodeBlock__header{background: var(--bg-bubble-header); 
                      transition: var(--bgt-bubble-header); }`,
      sheet.cssRules.length
    );
    function getParent(obj: any, n: any) {
      for (let j = 0; j < n; j++) {
        obj = obj.parentNode;
      }
      return obj;
    }
    let fnBubble = document.getElementById("id" + e.id);
    let fnCall: any = getParent(fnBubble, 5);
    fnCall = fnCall.querySelectorAll(
      `.pointRef > .CodeBlock > .CodeBlock__body > pre > code .ast-function-${e.name}-${e.order}`
    )[0];
    if (!(typeof fnCall === "undefined")) {
      fnCall.classList.toggle("fnhover");
    }
  }

  function hoverBubblesOut(e: any) {
    var sheet = window.document.styleSheets[0];
    sheet.deleteRule(sheet.cssRules.length - 1);
    sheet.deleteRule(sheet.cssRules.length - 1);
    function getParent(obj: any, n: any) {
      for (let j = 0; j < n; j++) {
        obj = obj.parentNode;
      }
      return obj;
    }
    let fnBubble = document.getElementById("id" + e.id);
    let fnCall: any = getParent(fnBubble, 5);
    fnCall = fnCall.querySelectorAll(
      `.pointRef > .CodeBlock > .CodeBlock__body > pre > code .ast-function-${e.name}-${e.order}`
    )[0];
    if (!(typeof fnCall === "undefined")) {
      fnCall.classList.toggle("fnhover");
    }
  }

  const TreeLi = (input: any) => {
    return (
      <ul style={style}>
        {input.map((e: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <li style={{ order: e.order }} data-testid="calltree">
                <span
                  className="liBubble"
                  onMouseOver={() => hoverBubbles(e)}
                  onMouseOut={() => hoverBubblesOut(e)}
                >
                  {e.name}
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

  const [opentree, setOpentree] = useState(false);

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
