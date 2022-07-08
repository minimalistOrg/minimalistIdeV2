import {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  RefObject,
} from "react";
import { useSelector, useDispatch } from "react-redux";
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
  CodeBlockCodeType,
} from "../../types/interface";
import { checkFunctionType } from "../util/fuctions";
import {add} from "../Root-file/slice/callTreeSlice"

function CodeBlockTS(props: CodeBlockType): JSX.Element {

const dispatch = useDispatch()
  const dataBubbleTree = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  );
  // const [id, setId] = useState(props.id);
  const [title, setTitle] = useState<string>("Loading...");
  const [code, setCode] = useState<
    TreesitterData | { type: string; text: string } | undefined
  >(checkFunctionType(props.code).code);
  const [params, setParams] = useState<TreesitterData[]>([]);
  const activeBubble: RefObject<HTMLDivElement> = useRef(null);
  const CodeTxt: MutableRefObject<null | HTMLElement> = useRef(null);
        const [paramok, setParamok] = useState(false);

  const listFN = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  );

  useEffect(() => {
    // setDataURL(window.UrlData());

    Resize(
      activeBubble.current as HTMLElement,
      CodeTxt?.current as HTMLElement
    );

    if (!(props.code === undefined)) {
      if (props.code.node.children[3] === undefined) {
        setCode(checkFunctionType(props.code).code);
        setTitle(props.code.node.children[1].children[0].text);
        // setID(props.code.node.children[1].children[0].id);
        setParams(checkFunctionType(props.code).params);
        // setParams("1");
      } else {
        setTitle(props.code.node.children[1].text);
        setCode(checkFunctionType(props.code).code);
        setParams(checkFunctionType(props.code).params);
        // setID(props.code.node.children[1].id)
        // setID(props.call.fninfo.id)
      }
    }

    let BubbleById = activeBubble.current;
    props.data.Bubble = () => activeBubble.current;
    Object.defineProperty(BubbleById, "fninfo", {
      value: props.data,
      writable: true,
    });

    let Bubble = (activeBubble.current as HTMLElement).parentElement
      ?.parentElement?.parentElement?.parentElement?.parentElement?.children[0];
    let validParent = Bubble?.classList.contains("Bubble");
    if (validParent) {
      let findFncall = Bubble?.querySelector(
        `.CallExpression[data-name="${listFN[props.data.index].name}"]`
      );
      if (findFncall != null) {
        const newRef = (findFncall as HTMLElement & FnInfoType).fninfo;
        newRef.element = () => findFncall as HTMLElement;
        newRef.Bubble = () => activeBubble.current;

        props.data.element = () => findFncall as HTMLElement;
        props.data.Bubble = () => activeBubble.current;
        props.data.params = newRef.params;
        props.data.order = newRef.order;

        Object.defineProperty(BubbleById, "fninfo", {
          value: props.data,
          writable: true,
        });
        const row= (activeBubble.current as HTMLElement).parentElement?.parentElement
        if(row != undefined){
            row.style.order= props.data.order.toString()
            dispatch(add(!dataBubbleTree))
        }
        setParamok(true);
        // console.log("re")
      }
    }
    //eslint-disable-next-line
  }, [props.data, title, paramok]);

  function fnHover(event: { currentTarget: HTMLElement }) {
    let data: ObjTree = (
      event.currentTarget.parentNode as HTMLElement & FnInfoType
    ).fninfo;
    if (!(data.element() === null)) {
      data.element()?.classList.add("CallExpressionHover");
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
  }

  function fnHoverLeave(event: { currentTarget: HTMLElement }) {
    let data: ObjTree = (
      event.currentTarget.parentNode as HTMLElement & FnInfoType
    ).fninfo;
    if (!(data.element() === null)) {
      data.element()?.classList.remove("CallExpressionHover");
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
      event.currentTarget.querySelectorAll(".identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("identifierHover");
    });
    if (event.target.classList[0] === "identifier") {
      let elements: NodeListOf<HTMLElement> =
        event.currentTarget.querySelectorAll(
          `.identifier[data-identifier=${event.target.dataset.identifier}]`
        );
      elements.forEach((e: HTMLElement) => {
        e.classList.add("identifierHover");
      });
    }
  }

  function identifierHoverOut(event: { currentTarget: HTMLElement }) {
    let elements: NodeListOf<HTMLElement> =
      event.currentTarget.querySelectorAll(".identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("identifierHover");
    });
  }

  type LocalBlock = HTMLElement | null | undefined;
  function paramsHoverOut(event: { currentTarget: HTMLElement }) {
    let CodeBlock: HTMLElement & FnInfoType = event.currentTarget?.parentNode
      ?.parentNode?.parentNode?.parentNode as HTMLElement & FnInfoType;
    let body: HTMLElement = event.currentTarget?.parentNode?.parentNode
      ?.parentNode?.nextSibling as HTMLElement;
    let elements: NodeListOf<HTMLElement> =
      body?.querySelectorAll(".identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("identifierHover");
    });

    if (
      event.currentTarget.dataset.identifier &&
      !(CodeBlock.fninfo.element() === null)
    ) {
      let BubbleBack: LocalBlock = CodeBlock.fninfo.element();

      do {
        BubbleBack = BubbleBack?.parentNode as HTMLElement;
      } while (!(BubbleBack?.classList[0] === "CodeBlock"));

      let elements: NodeListOf<HTMLElement> =
        BubbleBack.querySelectorAll(".identifier");
      elements.forEach((e: HTMLElement) => {
        e.classList.remove("identifierHover");
      });
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
      body.querySelectorAll(".identifier");
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("identifierHover");
    });
    if (event.target.classList[0] === "identifier") {
      let body = event.currentTarget.parentNode?.parentNode?.parentNode
        ?.nextSibling as HTMLElement;
      let elements: NodeListOf<HTMLElement> = body.querySelectorAll(
        `.identifier[data-identifier=${event.target.dataset.identifier}]`
      );
      elements.forEach((e: HTMLElement) => {
        e.classList.add("identifierHover");
      });
      //
      if (
        event.currentTarget.dataset.identifier &&
        !(CodeBlock.fninfo.element() === null)
      ) {
        let BubbleBack: LocalBlock = CodeBlock.fninfo.element();

        do {
          BubbleBack = BubbleBack?.parentNode as HTMLElement;
        } while (!(BubbleBack?.classList[0] === "CodeBlock"));

        let elements: NodeListOf<HTMLElement> = BubbleBack.querySelectorAll(
          `.identifier[data-identifier=${event.currentTarget.dataset.identifier}]`
        );
        elements.forEach((e: HTMLElement) => {
          e.classList.add("identifierHover");
        });
      }
    }
  }

  function checkParams(index: number): string | void {
    let txt: HTMLElement & FnInfoType = activeBubble.current as any;
    if (txt?.fninfo.params[index] === undefined) {
      return;
    }
    let identifier: string = txt?.fninfo.params[index].text;
    // eslint-disable-next-line
    let check: Boolean = /^[^\"\s\d][^\s\"\(\)]*[^\"\(\)\s]$/gm.test(
      identifier
    );
    if (check) {
      return identifier;
    } else {
      return;
    }
  }

  return (
    <div
      className="CodeBlock"
      data-testid="Bubble"
      ref={activeBubble}
      data-title={title}
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
