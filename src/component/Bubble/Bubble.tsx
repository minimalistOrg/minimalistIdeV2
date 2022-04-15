import CodeBlock from "../CodeBlock/CodeBlock";
import RenderAST from "../RenderAST/RenderAST";
import { useState } from "react";
import "./Bubble.css";
import { useDispatch } from "react-redux";
import { add } from "../Root-file/slice/addBubbleSlice";

interface BubbleType {
  entryPoint: number;
  data: any[];
}

function Bubble(props: BubbleType) {
  const [btnCount, setBtnCount] = useState<JSX.Element[]>([]);
  const [btnIndex, setBtnIndex] = useState<number[]>([]);
  const [order, setOrder] = useState<number[]>([]);

  const dispatch = useDispatch();

  function setJson(): void {
    dispatch(add(props.data));
  }

  setJson();

  // console.log(props.data);
  const data: any[] = props.data;

  const dataAst = (
    index: number
  ): { body: object; name: string; params: [] } => {
    // console.log(data[index].body?.body);
    // console.log(data[index])
    return {
      body: data[index].body?.body,
      name: data[index].id.name,
      params: data[index].params,
    };
  };

  const Codebubble = (index: number): JSX.Element => {
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

  interface addType {
    target: {
      getAttribute: (className: string) => string;
      setAttribute: (className: string, state: boolean) => void;
    };
  }

  function handleAdd(event: addType): void {
    // eslint-disable-next-line
    const evalFunction: boolean = eval(event.target.getAttribute("data-event"));
    // eslint-disable-next-line
    const evalFunctionIndex: number = eval(
      event.target.getAttribute("data-index")
    );
    // eslint-disable-next-line
    const evalFunctionOrder: number = eval(
      event.target.getAttribute("data-order")
    );
    //
    if (evalFunction) {
      setBtnCount(btnCount.concat(Codebubble(evalFunctionIndex)));
      setBtnIndex(btnIndex.concat(evalFunctionIndex));
      setOrder(order.concat(evalFunctionOrder));
      event.target.setAttribute("data-event", false);
    }
    // console.log(evalFunction, evalFunctionIndex);
  }

  const style: object = {
    display: "flex",
  };

  return (
    <div>
      <div style={style}>
        <div>{Codebubble(props.entryPoint)}</div>
        <div className="ColBubbles">
          {btnCount.map((element: JSX.Element, index: number) => {
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
