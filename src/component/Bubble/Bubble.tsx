import "./Bubble.css";
import { useState, useRef } from "react";
import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";

let c = 0;

function Bubble(props: any) {
  // const [renderBubble, setRenderBubble] = useState([]);
  const dispatch = useDispatch();
  const reRender = useSelector((state: any) => state.callTree.value);
  const listFn = useSelector((state: any) => state.addbubble.value);
  const currentBubble = useRef<any>(null);
  const [fninfoData, setFninfoData] = useState<any>(null);

  // useEffect(() => {
  //   // setRenderBubble(props.tree);
  //   // console.log("test number of render")
  // }, []);

  function handleAdd(event: any, dato: any) {
    let value = dato.value;
    const readIndex = event.target.parentNode;
    if (!(readIndex.fninfo === undefined)) {
      if (readIndex.fninfo.event) {
        setFninfoData(readIndex);
        // console.log(readIndex.fninfo,"here")

        value.push(readIndex.fninfo);
        readIndex.fninfo.event = false;
        // let dataBubble= readIndex.fninfo;
        dispatch(add(!reRender));
        setTimeout(() => {
          // console.log("test")
          readIndex.fninfo.Bubble().classList.add("CodeBlockHover");
          readIndex.fninfo
            .Bubble()
            .children[0].classList.add("CodeBlock__header--hover");
        }, 150);
        // let openBubble= document.getElementById("id" + readIndex.fninfo.id)
        // console.log(openBubble,readIndex.fninfo.id)
        // let BubbleRender= readIndex.fninfo.Bubble;
        // Object.defineProperty(BubbleRender, "fninfo", {value: readIndex.fninfo})
      }
    }

    //
    //
    if (
      event.target.classList[0] === "Identifier" &&
      !(event.target.parentNode.classList[0] === "CallExpression")
    ) {
      let BubbleBack = event.target;

      do {
        BubbleBack = BubbleBack.parentNode;
      } while (!(BubbleBack.classList[0] === "CodeBlock"));

      let identifiers = BubbleBack.querySelectorAll(
        `.Identifier[data-identifier=${event.target.dataset.identifier}]`
      );
      // console.log(identifiers);
      if (event.target.dataset.color === undefined) {
        c++;
        // console.log(c);
      }
      identifiers.forEach((e: any) => {
        e.classList.toggle(colorhash(e));
      });
      // event.target.classList.toggle("color-1");
    }
  }

  function colorhash(data: any) {
    let list = [
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

  function closeBubble(parent: any, children: any) {
    // console.log(children);
    if (!(children.element === null)) {
      children.element.fninfo.event = true;
      children.element.fninfo.element.classList.remove("CallExpressionHover");
      // children.element.fninfo.Bubble = null;
    }

    document.querySelector<any>("html").style = "cursor:default";
    const listParent = parent.indexOf(children);
    parent.splice(listParent, 1);
    dispatch(add(!reRender));
  }

  const Codebubble = (
    children: any,
    parent: any,
    fnindex: number,
    fninfoData: any,
    id: number
  ): JSX.Element => {
    return (
      <CodeBlockTS
        code={listFn[fnindex]}
        id={id}
        data={children}
        call={fninfoData}
        openBubble={(event: any) => handleAdd(event, children)}
        closeBubble={() => closeBubble(parent, children)}
      />
    );
  };

  return (
    <div className="BubbleContainer">
      {props.tree.map((e: any, index: number) => {
        return (
          <div key={index} style={{ order: e.order }} className="RowBubble">
            <div className="Bubble">
              {Codebubble(e, props.tree, e.index, props.call, e.id)}
            </div>
            <div className="ColBubbles" ref={currentBubble}>
              <Bubble fnindex={e.index} tree={e.value} call={fninfoData} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bubble;
