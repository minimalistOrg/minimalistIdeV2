import CodeBlock from "../CodeBlock/CodeBlock";
import RenderAST from "../RenderAST/RenderAST";
import { useState } from "react";
import "./Bubble.css";
import { useDispatch } from "react-redux";
import { add } from "../Root-file/slice/addBubbleSlice";

function Bubble(props: any) {
  const [btnCount, setBtnCount] = useState<any>([]);
  const [btnIndex, setBtnIndex] = useState<any>([]);
  const [order, setOrder] = useState<any>([]);

  const dispatch = useDispatch();

  function setJson() {
    dispatch(add(props.data));
  }

  setJson();

  // console.log(props.data);
  const data = props.data;

  const dataAst = (index: number) => {
    // console.log(data[index].body?.body);
    // console.log(data[index])
    return {
      body: data[index].body?.body,
      name: data[index].id.name,
      params: data[index].params,
    };
  };

  const Codebubble = (index: number) => {
    return (
      <CodeBlock
        title={dataAst(index).name}
        argument={dataAst(index).params}
        onClick={handleAdd}
      >
        <RenderAST ast={dataAst(index).body} />
      </CodeBlock>
    );
  };

  function handleAdd(event: any) {
    // eslint-disable-next-line
    const evalFunction = eval(event.target.getAttribute("data-event"));
    // eslint-disable-next-line
    const evalFunctionIndex = eval(event.target.getAttribute("data-index"));
    // eslint-disable-next-line
    const evalFunctionOrder = eval(event.target.getAttribute("data-order"));
    //
    if (evalFunction) {
      setBtnCount(btnCount.concat(Codebubble(evalFunctionIndex)));
      setBtnIndex(btnIndex.concat(evalFunctionIndex));
      setOrder(order.concat(evalFunctionOrder));
      event.target.setAttribute("data-event", false);
    }
    // console.log(evalFunction, evalFunctionIndex);
  }

  const style = {
    display: "flex",
  };

  return (
    <div>
      <div style={style}>
        <div>{Codebubble(props.entryPoint)}</div>
        <div className="ColBubbles">
          {btnCount.map((element: any, index: number) => {
            return (
              <div
                key={index}
                className="order"
                style={{ order: order[index] }}
              >
                <Bubble entryPoint={btnIndex[index]} data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bubble;
