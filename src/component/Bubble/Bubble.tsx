import "./Bubble.css";
import { useState, useEffect } from "react";
import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";

function Bubble(props: any) {
  const [renderBubble, setRenderBubble] = useState([]);
  const dispatch = useDispatch();
  const reRender = useSelector((state: any) => state.callTree.value);
  const listFn = useSelector((state: any) => state.addbubble.value);

  useEffect(() => {
    setRenderBubble(props.tree);
  }, []);

  const [t, setT] = useState(null);

  function handleAdd(event: any, dato: any) {
    let value = dato.value;
    const readIndex = event.target.parentNode;
    if (!(readIndex.fninfo === undefined)) {
      if (readIndex.fninfo.event) {
        value.push(readIndex.fninfo);
        readIndex.fninfo.event = false;
        setT(readIndex.fninfo);
        dispatch(add(!reRender));
      }
    }
  }

  function closeBubble(parent: any, children: any) {
    // console.log(children);
    if (!(children.element === undefined)) {
      children.element.fninfo.event = true;
    }
    const listParent = parent.indexOf(children);
    parent.splice(listParent, 1);
    dispatch(add(!reRender));
  }

  const Codebubble = (
    children: any,
    parent: any,
    fnindex: number
  ): JSX.Element => {
    return (
      <CodeBlockTS
        code={listFn[fnindex]}
        openBubble={(event: any) => handleAdd(event, children)}
        closeBubble={() => closeBubble(parent, children)}
      />
    );
  };

  return (
    <div className="BubbleContainer">
      {renderBubble.map((e: any, index: number) => {
        return (
          <div key={index} style={{ order: e.order }} className="RowBubble">
            <div className="Bubble">{Codebubble(e, renderBubble, e.index)}</div>
            <div className="ColBubbles">
              <Bubble fnindex={e.index} tree={e.value} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bubble;
