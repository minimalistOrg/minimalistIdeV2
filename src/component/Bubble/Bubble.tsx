import "./Bubble.css";
import { useState,useRef } from "react";
import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";
import {
  BubbleProps,
  ObjTree,
  RenderType,
  StoreFn,
  FnInfoType,
  CodeBlockCodeType,
} from "../../types/interface";
import { setDataURL } from "../util/fuctions";

let c: number = 0;

function Bubble(props: BubbleProps): JSX.Element {
  // const [renderBubble, setRenderBubble] = useState([]);
  //
  //
  const dispatch = useDispatch();
  const reRender: boolean = useSelector(
    (state: RenderType) => state.callTree.value
  );
  const listFn: CodeBlockCodeType[] = useSelector(
    (state: StoreFn) => state.addbubble.value
  );
  // const currentBubble = useRef<any>(null);
  const [fninfoData, setFninfoData] = useState<
    (HTMLElement & FnInfoType) | null
  >(null);

  const element= useRef<any>(null)

  // useEffect(()=>{
  // window.UrlData()
  // },[window.UrlData()])

  function handleAdd(
    event: { target: HTMLElement },
    dato: { value: ObjTree[] }
  ): void {
    let value: ObjTree[] = dato.value;
    const readIndex = event.target.parentNode as HTMLElement & FnInfoType;
    // console.log(readIndex)
    if (!(readIndex.fninfo === undefined)) {
    console.log(element.current)
      const list = (element.current as HTMLElement).querySelectorAll(
        `.CallExpression[data-name="${readIndex.dataset.name}"]`
      );
      const position = Array.from(list).indexOf(readIndex);
      readIndex.fninfo.position = position.toString();

      if (readIndex.fninfo.event) {
        setFninfoData(readIndex);

        value.push(readIndex.fninfo);
        readIndex.fninfo.event = false;
        // let dataBubble= readIndex.fninfo;
        dispatch(add(!reRender));
        setTimeout(() => {
          readIndex.fninfo.Bubble()!.classList.add("CodeBlockHover");
          readIndex.fninfo
            .Bubble()!
            .children[0].classList.add("CodeBlock__header--hover");
        }, 150);
        // let openBubble= document.getElementById("id" + readIndex.fninfo.id)
        // let BubbleRender= readIndex.fninfo.Bubble;
        // Object.defineProperty(BubbleRender, "fninfo", {value: readIndex.fninfo})
        setDataURL(window.UrlData());
      }
    }

    //
    type LocalBlock = HTMLElement | null | undefined;
    if (
      event.target.classList[0] === "identifier" &&
      !(
        (event.target.parentNode as HTMLElement).classList[0] ===
        "CallExpression"
      )
    ) {
      let BubbleBack: LocalBlock = event.target;

      do {
        BubbleBack = BubbleBack?.parentElement;
      } while (!(BubbleBack?.classList[0] === "CodeBlock"));

      let identifiers: NodeListOf<HTMLElement> = BubbleBack.querySelectorAll(
        `.identifier[data-identifier=${event.target.dataset.identifier}]`
      );
      if (event.target.dataset.color === undefined) {
        c++;
      }
      identifiers.forEach((e: HTMLElement) => {
        e.classList.toggle(colorhash(e));
      });
      // event.target.classList.toggle("color-1");
    }
  }

  function colorhash(data: HTMLElement): string {
    let list: string[] = [
      "color-1",
      "color-2",
      "color-3",
      "color-4",
      "color-5",
      "color-6",
      "color-7",
    ];
    if (c > list.length - 1) {
      c = 0;
    }
    if (data.dataset.color === undefined) {
      data.dataset.color = list[c];
      return data.dataset.color;
    } else {
      return data.dataset.color;
    }
  }

  function closeBubble(parent: ObjTree[], children: ObjTree) {
    // console.log( children.element() )
    if (!(children.element() === null)) {
      children.value = [];
      (children.element() as HTMLElement & FnInfoType).fninfo.event = true;
      (children.element() as HTMLElement & FnInfoType).fninfo.Bubble = () =>
        null;
      (
        (
          children.element() as HTMLElement & FnInfoType
        ).fninfo.element() as HTMLElement
      ).classList.remove("CallExpressionHover");
      // children.element().fninfo.Bubble = null;
    }

    // document.querySelectorAll("html")[0]!.style = "cursor:default";
    const listParent: number = parent.indexOf(children);
    parent.splice(listParent, 1);

    setDataURL(window.UrlData());
    dispatch(add(!reRender));
    // dispatch(add(!reRender));
  }

  const Codebubble = (
    children: ObjTree,
    parent: ObjTree[],
    fnindex: number,
    fninfoData: (HTMLElement & FnInfoType) | null | undefined,
    id: string
  ): JSX.Element => {
    return (
      <CodeBlockTS
        code={listFn[fnindex]}
        id={id}
        data={children}
        call={fninfoData}
        openBubble={(event: { target: HTMLElement }) =>
          handleAdd(event, children)
        }
        closeBubble={() => closeBubble(parent, children)}
      />
    );
  };

  return (
    <div className="BubbleContainer">
      {props.tree.map((e: ObjTree, index: number) => {
        return (
          <div key={index} style={{ order: e.order }} className="RowBubble">
            <div ref={element} className="Bubble">
              {Codebubble(e, props.tree, e.index, props.call, e.id)}
            </div>
            {/*ref={currentBubble}*/}
            <div className="ColBubbles">
              <Bubble fnindex={e.index} tree={e.value} call={fninfoData} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bubble;
