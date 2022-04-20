import CodeBlock from "../CodeBlock/CodeBlock";
import RenderAST from "../RenderAST/RenderAST";
import { useState } from "react";
import "./Bubble.css";
import { useDispatch } from "react-redux";
import { add } from "../Root-file/slice/addBubbleSlice";
import { hoverState } from "../CodeBlock/Functions/HoverIdentifier";

interface BubbleType {
  entryPoint: number;
  data: any[];
  order: number;
  dataparams: string[];
}

function Bubble(props: BubbleType) {
  const [btnCount, setBtnCount] = useState<JSX.Element[]>([]);
  const [btnIndex, setBtnIndex] = useState<number[]>([]);
  const [order, setOrder] = useState<number[]>([]);
  const [paramsHover, setParamsHover]= useState([])

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
        onHoverevent={hoverState}
        order={props.order}
        dataparams={props.dataparams}
      >
        <RenderAST ast={dataAst(index).body} />
      </CodeBlock>
    );
  };

  function handleAdd(event: any): void {
    const elementFunction= event.target.parentNode.parentNode
    const arguument= elementFunction.querySelectorAll(".ast-params > .p3")
    let arg:any= []
    arguument.forEach( (e:any)=>{
      arg.push(e.textContent)
    } )
    console.log(arg)
    setParamsHover(arg)
    // eslint-disable-next-line
    const evalFunction: boolean = eval(
      event.target.parentNode.getAttribute("data-event")
    );
    // eslint-disable-next-line
    const evalFunctionIndex: number = eval(
      event.target.parentNode.getAttribute("data-index")
    );
    // eslint-disable-next-line
    const evalFunctionOrder: number = eval(
      event.target.parentNode.getAttribute("data-order")
    );
    //
    if (evalFunction) {
      setBtnCount(btnCount.concat(Codebubble(evalFunctionIndex)));
      setBtnIndex(btnIndex.concat(evalFunctionIndex));
      setOrder(order.concat(evalFunctionOrder));
      event.target.parentNode.setAttribute("data-event", false);
    }
    // console.log(evalFunction, evalFunctionIndex);
  }

  const style: object = {
    display: "flex",
  };

  return (
    <div>
      <div
        style={style}
        data-order={props.order}
        className={`grandparentHover-${props.order}`}
      >
        <div className="pointRef">{Codebubble(props.entryPoint)}</div>
        <div className="ColBubbles">
          {btnCount.map((element: JSX.Element, index: number) => {
            return (
              <div
                key={index}
                className="order"
                style={{ order: order[index] }}
              >
                <Bubble
                  order={order[index]}
                  entryPoint={btnIndex[index]}
                  data={data}
                  dataparams={paramsHover}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bubble;
