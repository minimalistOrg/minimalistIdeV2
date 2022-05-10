import "./Bubble.css";
import { useState, useEffect } from "react";
import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";

function Bubble(props: any) {
  const [renderBubble, setRenderBubble] = useState([]);
  const dispatch = useDispatch();
  const reRender = useSelector((state: any) => state.callTree.value);
  const listFn= useSelector((state:any) => state.addbubble.value )

  useEffect(() => {
    setRenderBubble(props.tree);
  }, []);

  function handleAdd(event: any, dato: any) {
    let value = dato.value;
    const readIndex = event.target.parentNode;
    if (readIndex.getAttribute("data-fn_declaration_index")) {
      const fnIndex = readIndex.getAttribute("data-fn_declaration_index");
      const fnName = readIndex.getAttribute("data-name");
      value.push({ name: fnName, index: parseInt(fnIndex), value: [] });
      console.log(event.target.parentNode);
    }
    dispatch(add(!reRender));
  }

  const Codebubble = (children: any,fnindex:number): JSX.Element => {
    return (
      <CodeBlockTS
        code={listFn[fnindex]}
        openBubble={(event: any) => handleAdd(event, children)}
      />
    );
  };

  const style: object = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={style}>
      {renderBubble.map((e: any, index: number) => {
        return (
          <div key={index} style={{display:"flex"}}>
            <div className="pointRef">{Codebubble(e,e.index)}</div>
            <div className="ColBubbles"><Bubble fnindex={e.index} tree={e.value} /></div>
          </div>
        );
      })}
    </div>
  );
}

export default Bubble;
