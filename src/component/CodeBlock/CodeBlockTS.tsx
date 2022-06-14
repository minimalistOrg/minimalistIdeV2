import {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  RefObject,
} from "react";
import { useSelector } from "react-redux";
import ChooseType from "../RenderTreeSitter/ChooseType";
import "./CodeBlock.css";
import { BubbleCollapse } from "./Functions/BubbleCollapse";
import IcoClose from "../../Icons/IcoClose";
import IcoCollapse from "../../Icons/IcoCollapse";
import Resize from "./CodeBlock__Resize";
import {
  CodeBlockType,
  FnInfoType,
  ObjTree,
  TreesitterData,
} from "../../types/interface";

function CodeBlockTS(props: CodeBlockType): JSX.Element {
  // console.log(props, "CodeBlockTS");
  const dataBubbleTree = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  );
  const [title, setTitle] = useState<string>("Loading...");
  const [code, setCode] = useState<
    TreesitterData | { type: string; text: string }
  >({ type: "loading", text: "Loading" });
  const [params, setParams] = useState<TreesitterData[]>([]);
  const activeBubble: RefObject<HTMLDivElement> = useRef(null);
  const CodeTxt: MutableRefObject<null | HTMLElement> = useRef(null);

  useEffect(() => {
    Resize(activeBubble.current as HTMLElement, CodeTxt?.current as HTMLElement);

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

    let BubbleById = document.getElementById("id" + props.id);
    Object.defineProperty(BubbleById, "fninfo", {
      value: props.data,
      writable: true,
    });
    // console.log("t")
    //eslint-disable-next-line
  }, [dataBubbleTree]);

  // useEffect(()=>{
  //   maxHeightBody(activeBubble.current);
  // },[])

  function fnHover(event: { currentTarget: HTMLElement }) {
    let data: ObjTree = (
      event.currentTarget.parentNode as HTMLElement & FnInfoType
    ).fninfo;
    // console.log(event.currentTarget.parentNode)
    if (!(data.element === null)) {
      data.element.classList.add("CallExpressionHover");
      if (!(data.Bubble() === null)) {
        data.Bubble()?.classList.add("CodeBlockHover");
      }
    } else {
      (
        event.currentTarget.parentNode as HTMLElement & FnInfoType
      ).classList.add("CodeBlockHover");
    }
    //identifier
    // maxHeightBody(activeBubble.current);
    // console.log("test")
  }

  function fnHoverLeave(event: { currentTarget: HTMLElement }) {
    let data: ObjTree = (
      event.currentTarget.parentNode as HTMLElement & FnInfoType
    ).fninfo;
    if (!(data.element === null)) {
      // console.log(data.element);
      data.element.classList.remove("CallExpressionHover");
      if (!(data.Bubble() === null)) {
        data.Bubble()?.classList.remove("CodeBlockHover");
      }
    } else {
      (event.currentTarget.parentNode as HTMLElement).classList.remove(
        "CodeBlockHover"
      );
    }
  }

  function identifierHover(event: {
    currentTarget: HTMLElement;
    target: HTMLElement;
  }) {
    let elements: NodeListOf<HTMLElement> =
      event.currentTarget.querySelectorAll(".Identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("IdentifierHover");
    });
    if (event.target.classList[0] === "Identifier") {
      let elements: NodeListOf<HTMLElement> =
        event.currentTarget.querySelectorAll(
          `.Identifier[data-identifier=${event.target.dataset.identifier}]`
        );
      elements.forEach((e: HTMLElement) => {
        e.classList.add("IdentifierHover");
      });
      // console.log(elements);
    }
  }

  function identifierHoverOut(event: { currentTarget: HTMLElement }) {
    // console.log(event.currentTarget)
    let elements: NodeListOf<HTMLElement> =
      event.currentTarget.querySelectorAll(".Identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("IdentifierHover");
    });
  }

  type LocalBlock = HTMLElement | null | undefined;
  function paramsHoverOut(event: { currentTarget: HTMLElement }) {
    let CodeBlock: HTMLElement & FnInfoType = event.currentTarget?.parentNode
      ?.parentNode?.parentNode?.parentNode as HTMLElement & FnInfoType;
    let body: HTMLElement = event.currentTarget?.parentNode?.parentNode
      ?.parentNode?.nextSibling as HTMLElement;
    let elements: NodeListOf<HTMLElement> =
      body?.querySelectorAll(".Identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("IdentifierHover");
    });

    if (
      event.currentTarget.dataset.identifier &&
      !(CodeBlock.fninfo.element === null)
    ) {
      let BubbleBack: LocalBlock = CodeBlock.fninfo.element;

      do {
        BubbleBack = BubbleBack?.parentNode as HTMLElement;
      } while (!(BubbleBack?.classList[0] === "CodeBlock"));

      let elements: NodeListOf<HTMLElement> =
        BubbleBack.querySelectorAll(".Identifier");
      elements.forEach((e: HTMLElement) => {
        e.classList.remove("IdentifierHover");
      });
      // console.log(BubbleBack);
    }
  }

  function paramsHover(event: {
    currentTarget: HTMLElement;
    target: HTMLElement;
  }) {
    let CodeBlock = event.currentTarget.parentNode?.parentNode?.parentNode
      ?.parentNode as HTMLElement & FnInfoType;
    let body = event.currentTarget.parentNode?.parentNode?.parentNode
      ?.nextSibling as HTMLElement;
    let elements: NodeListOf<HTMLElement> =
      body.querySelectorAll(".Identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("IdentifierHover");
    });
    if (event.target.classList[0] === "Identifier") {
      let body = event.currentTarget.parentNode?.parentNode?.parentNode
        ?.nextSibling as HTMLElement;
      let elements: NodeListOf<HTMLElement> = body.querySelectorAll(
        `.Identifier[data-identifier=${event.target.dataset.identifier}]`
      );
      elements.forEach((e: HTMLElement) => {
        e.classList.add("IdentifierHover");
      });
      //
      if (
        event.currentTarget.dataset.identifier &&
        !(CodeBlock.fninfo.element === null)
      ) {
        let BubbleBack: LocalBlock = CodeBlock.fninfo.element;

        do {
          BubbleBack = BubbleBack?.parentNode as HTMLElement;
        } while (!(BubbleBack?.classList[0] === "CodeBlock"));

        let elements: NodeListOf<HTMLElement> = BubbleBack.querySelectorAll(
          `.Identifier[data-identifier=${event.currentTarget.dataset.identifier}]`
        );
        elements.forEach((e: HTMLElement) => {
          e.classList.add("IdentifierHover");
        });
        // console.log(BubbleBack);
      }
    }
  }

  function checkParams(index: number): string | void {
    let txt: (HTMLElement & FnInfoType) | null = document.getElementById(
      "id" + props.id
    ) as HTMLElement & FnInfoType;
    // console.log(params.length, txt.fninfo.params.length);
    if (txt?.fninfo.params[index] === undefined) {
      return;
    }
    let identifier: string = txt?.fninfo.params[index].text;
    // console.log(identifier)
    // eslint-disable-next-line
    let check: Boolean = /^[^\"\s\d][^\s\"\(\)]*[^\"\(\)\s]$/gm.test(
      identifier
    );
    // console.log(check)
    if (check) {
      // console.log("here")
      return identifier;
    } else {
      return;
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
            {params.map((e: TreesitterData, index: number) => {
              return (
                <span
                  key={index}
                  onMouseLeave={paramsHoverOut}
                  onMouseMove={paramsHover as () => void}
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
        onMouseMove={identifierHover as () => void}
        onMouseLeave={identifierHoverOut}
        onClick={props.openBubble as () => void}
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
