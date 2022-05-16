import "./Bubble.css";
import { useState, useEffect, useRef } from "react";
import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";

function Bubble(props: any) {
  const [renderBubble, setRenderBubble] = useState([]);
  const dispatch = useDispatch();
  const reRender = useSelector((state: any) => state.callTree.value);
  const listFn = useSelector((state: any) => state.addbubble.value);
  const currentBubble = useRef<any>(null);
  const [fninfoData,setFninfoData]= useState<any>(null)

  useEffect(() => {
    setRenderBubble(props.tree);
    // console.log("test number of render")
  }, [props.tree]);

  function handleAdd(event: any, dato: any) {
    let value = dato.value;
    const readIndex = event.target.parentNode;
    if (!(readIndex.fninfo === undefined)) {
      if (readIndex.fninfo.event) {
        setFninfoData(readIndex)
        value.push(readIndex.fninfo);
        readIndex.fninfo.event = false;
        // console.log(readIndex.fninfo);
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
    fnindex: number,
    fninfoData:any
  ): JSX.Element => {
    return (
      <CodeBlockTS
        code={listFn[fnindex]}
        call={fninfoData}
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
            <div className="Bubble">{Codebubble(e, renderBubble, e.index, props.call)}</div>
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
