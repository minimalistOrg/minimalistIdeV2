import CodeBlock from "../CodeBlock/CodeBlock";
import RenderAST from "../RenderAST/RenderAST";
import { useEffect, useState } from "react";
import "./Bubble.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/addBubbleSlice";
import {
  hoverState,
  highligthToogle,
} from "../CodeBlock/Functions/HoverIdentifier";
import { add as bubbleTree } from "../Root-file/slice/callTreeSlice";
import {TreeCall} from "../Root-file/CallTree"

interface BubbleType {
  entryPoint: any;
  data: any[];
  order: number;
  dataparams: any;
}


function Bubble(props: BubbleType) {
  // const [btnCount, setBtnCount] = useState<any>([]);
  const [btnIndex, setBtnIndex] = useState<number[]>([]);
  const [order, setOrder] = useState<number[]>([]);
  const [paramsHover, setParamsHover] = useState<string[]>([]);
  const [renderBubble, setRenderBubble] = useState<any>([]);

  const dispatch = useDispatch();
  const Tree = useSelector((state: any) => state.callTree.value);

  useEffect(() => {
    setRenderBubble(props.entryPoint);
    dispatch(bubbleTree(! Tree ));
    // console.log(Tree, "btnCount");
  }, []);

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
    let name: string = "";
    let params = [];
    let body = [];
    if (data[index]["id"] === undefined) {
      // console.log("hi");
    } else {
      name = data[index].id.name;
      params = data[index].params;
      body = data[index].body?.body;
    }
    if (data[index]["declarations"] === undefined) {
      // console.log("hi");
    } else {
      name = data[index].declarations[0].id.name;
      params = data[index].declarations[0].init.params;
      body = data[index].declarations[0].init.body.body;
      // console.log(data[index].declarations, "test");
    }

    //
    return {
      body: body,
      name: name,
      params: params,
    };
  };

  const Codebubble = (index: number,json:any,close:any): JSX.Element => {
    return (
      <CodeBlock
        title={dataAst(index).name}
        argument={dataAst(index).params}
        onClick={(e)=>{handleAdd(e,json)}}
        onHoverevent={hoverState}
        order={props.order}
        dataparams={props.dataparams}
        entryPoint={close}
      >
        <RenderAST ast={dataAst(index).body} />
      </CodeBlock>
    );
  };

  function handleAdd(event: any,json:any): void {
    //
    let dato= json.value;
    highligthToogle(event);
    //
    const elementFunction = event.target.parentNode.parentNode;
    const argument = elementFunction.querySelectorAll(".ast-params > .p3");
    let arg: any = [];
    argument.forEach((e: any) => {
      arg.push(e.textContent);
    });
    // console.log(arg)
    setParamsHover(paramsHover.concat([arg]));
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

      dato.push({name: dataAst(evalFunctionIndex).name ,index: evalFunctionIndex,value:[]})

    // dispatch(bubbleTree(TreeCall));
      // setBtnCount(btnCount.concat(Codebubble(evalFunctionIndex)));
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
      {renderBubble.map((e: any,index:number) => {
        return (
          <div
            key={index}
            style={style}
            data-order={props.order}
            className={`grandparentHover-${props.order}`}
          >
            <div className="pointRef">{Codebubble(e.index,e,{parent:renderBubble,child: e})}</div>
            <div className="ColBubbles">
              {/*btnCount.map((element: JSX.Element, index: number) => {
            return (
              <div
                key={index}
                className="order"
                style={{ order: order[index] }}
                >*/}
                <Bubble
                  order={order[index]}
                  entryPoint={e.value}
                  data={data}
                  dataparams={paramsHover[index]}
                />{/*
              </div>
            );
            })*/}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bubble;
