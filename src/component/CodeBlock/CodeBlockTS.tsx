import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ChooseType from "../RenderTreeSitter/ChooseType";
import "./CodeBlock.css";
import {BubbleCollapse,maxHeightBody} from "./Functions/BubbleCollapse";
import IcoClose from "./IcoClose";
import IcoCollapse from "./IcoCollapse";
import Resize from "./CodeBlock__Resize"

function CodeBlockTS(props: any): JSX.Element {
  // console.log(props.code, "CodeBlockTS");
  const dataBubbleTree = useSelector((state: any) => state.callTree.value);
  const [title, setTitle] = useState("Loading...");
  const [code, setCode] = useState({ type: "loading", text: "Loading" });
  const [params, setParams] = useState([]);
  const activeBubble = useRef<any>(null);
 const CodeTxt = useRef<any>(null);


  useEffect(() => {

    Resize(activeBubble.current,CodeTxt.current)

    if (!(props.code === undefined)) {
      if (props.code.node.children[3] === undefined) {
        setCode(props.code.node.children[1].children[2].children[2]);
        setTitle(props.code.node.children[1].children[0].text);
        // setID(props.code.node.children[1].children[0].id);
        setParams(props.code.node.children[1].children[2].children[0].children);
        // setParams("1");
      } else {
        setTitle(props.code.node.children[1].text);
        setCode(props.code.node.children[3]);
        setParams(props.code.node.children[2].children);
        // setID(props.code.node.children[1].id)
        // setID(props.call.fninfo.id)
      }
    }

    let BubbleById= document.getElementById("id"+props.id)
    Object.defineProperty(BubbleById, "fninfo", {
      value: props.data,
      writable: true,
    });
    // console.log("t")
    maxHeightBody(activeBubble.current)
    //eslint-disable-next-line
  }, [dataBubbleTree]);

  function fnHover(event: any) {
    let data = event.currentTarget.parentNode.fninfo;
    // console.log(event.currentTarget.parentNode)
    if (!(data.element === null)) {
      data.element.classList.add("CallExpressionHover");
      if (!(data.Bubble() === null)) {
        data.Bubble().classList.add("CodeBlockHover");
      }
    } else {
      event.currentTarget.parentNode.classList.add("CodeBlockHover");
    }
    //identifier
    // console.log("test")
  }

  function fnHoverLeave(event: any) {
    let data = event.currentTarget.parentNode.fninfo;
    if (!(data.element === null)) {
      // console.log(data.element);
      data.element.classList.remove("CallExpressionHover");
      if (!(data.Bubble() === null)) {
        data.Bubble().classList.remove("CodeBlockHover");
      }
    } else {
      event.currentTarget.parentNode.classList.remove("CodeBlockHover");
    }
  }

  function identifierHover(event: any) {
    let elements = event.currentTarget.querySelectorAll(".Identifier");
    elements.forEach((e: any) => {
      e.classList.remove("IdentifierHover");
    });
    if (event.target.classList[0] === "Identifier") {
      let elements = event.currentTarget.querySelectorAll(
        `.Identifier[data-identifier=${event.target.dataset.identifier}]`
      );
      elements.forEach((e: any) => {
        e.classList.add("IdentifierHover");
      });
      // console.log(elements);
    }
  }

  function identifierHoverOut(event: any) {
    // console.log(event.currentTarget)
    let elements = event.currentTarget.querySelectorAll(".Identifier");
    elements.forEach((e: any) => {
      e.classList.remove("IdentifierHover");
    });
  }

  function paramsHoverOut(event: any) {
    let CodeBlock =
      event.currentTarget.parentNode.parentNode.parentNode.parentNode;
    let body = event.currentTarget.parentNode.parentNode.parentNode.nextSibling;
    let elements = body.querySelectorAll(".Identifier");
    elements.forEach((e: any) => {
      e.classList.remove("IdentifierHover");
    });

    if (event.currentTarget.dataset.identifier && !(CodeBlock.fninfo.element === null) ) {
      let BubbleBack = CodeBlock.fninfo.element;

      do {
        BubbleBack = BubbleBack.parentNode;
      } while (!(BubbleBack.classList[0] === "CodeBlock"));

      let elements = BubbleBack.querySelectorAll(".Identifier");
      elements.forEach((e: any) => {
        e.classList.remove("IdentifierHover");
      });
      // console.log(BubbleBack);
    }
  }

  function paramsHover(event: any) {
    let CodeBlock =
      event.currentTarget.parentNode.parentNode.parentNode.parentNode;
    let body = event.currentTarget.parentNode.parentNode.parentNode.nextSibling;
    let elements = body.querySelectorAll(".Identifier");
    elements.forEach((e: any) => {
      e.classList.remove("IdentifierHover");
    });
    if (event.target.classList[0] === "Identifier") {
      let body =
        event.currentTarget.parentNode.parentNode.parentNode.nextSibling;
      let elements = body.querySelectorAll(
        `.Identifier[data-identifier=${event.target.dataset.identifier}]`
      );
      elements.forEach((e: any) => {
        e.classList.add("IdentifierHover");
      });
      //
      if (event.currentTarget.dataset.identifier && !(CodeBlock.fninfo.element === null)) {
        let BubbleBack = CodeBlock.fninfo.element;

        do {
          BubbleBack = BubbleBack.parentNode;
        } while (!(BubbleBack.classList[0] === "CodeBlock"));

        let elements = BubbleBack.querySelectorAll(
          `.Identifier[data-identifier=${event.currentTarget.dataset.identifier}]`
        );
        elements.forEach((e: any) => {
          e.classList.add("IdentifierHover");
        });
        // console.log(BubbleBack);
      }
    }
  }

  function checkParams(index: number) {
    let txt:any = document.getElementById("id"+props.id)
    let identifier= txt.fninfo.params[index].text
// console.log(identifier)
    switch (identifier) {
      case "(":
        return;
      case ")":
        return;
      case ",":
        return;
      default:
        return identifier;
    }
  }

  // console.log(params);

  return (
    <div
      id={"id" + props.id}
      className="CodeBlock"
      data-testid="Bubble"
      ref={activeBubble}
    >
      <div
        className="CodeBlock__header"
        data-testid="BubbleOrder"
        onMouseOver={fnHover}
        onMouseLeave={fnHoverLeave}
      >
        <div className="CodeBlock__title">
          <div onClick={BubbleCollapse} className="CodeBlock__collapse">
            <IcoCollapse />
          </div>
          {title}
          <span className="CodeBlock__arguments">
            {" "}
            {params.map((e: any, index: number) => {
              return (
                <span
                  key={index}
                  onMouseLeave={paramsHoverOut}
                  onMouseMove={paramsHover}
                  data-identifier={checkParams(index)}
                >
                  <ChooseType info={e} />
                </span>
              );
            })}{" "}
          </span>
        </div>
        <button
          className="CodeBlock__menu"
          data-testid="closeBubble"
          title="Close"
          onClick={props.closeBubble}
        >
          <IcoClose />{" "}
        </button>
      </div>
      <div
        className="CodeBlock__body"
        onMouseMove={identifierHover}
        onMouseLeave={identifierHoverOut}
        onClick={props.openBubble}
      >
        <pre>
          <code ref={CodeTxt}>
            <ChooseType info={code} />
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlockTS;
