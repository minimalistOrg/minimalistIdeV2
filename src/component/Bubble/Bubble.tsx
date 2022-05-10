import "./Bubble.css";
import { useState, useEffect } from "react";
import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";

function Bubble(props: any) {
  const [renderBubble, setRenderBubble] = useState([]);
  const dispatch = useDispatch();
  const reRender = useSelector((state: any) => state.callTree.value);

  useEffect(() => {
    setRenderBubble(props.tree);
  }, []);

  function handleAdd(dato: any) {
    let value = dato.value;
    value.push({ name: "click", value: [] });
    dispatch(add(!reRender));
  }

  const Codebubble = (children: any): JSX.Element => {
    return (
      <CodeBlockTS code={props.data} openBubble={() => handleAdd(children)} />
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
          <div key={index}>
            <div className="pointRef">{Codebubble(e)}</div>
            <div className="ColBubbles">{/*<Bubble data={props.data} />*/}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Bubble;
