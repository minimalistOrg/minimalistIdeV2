import CodeBlock from "../CodeBlock/CodeBlock";
import RenderAST from "../RenderAST/RenderAST";
import { useState } from "react";
import "./Bubble.css";

function Bubble(props: any) {
  const [btnCount, setBtnCount] = useState<any>([]);
  const [btnIndex, setBtnIndex] = useState<any>([]);

  // console.log(props.data);
  const data = props.data;

  const dataAst = (index: number) => {
    // console.log(data[index].body?.body);
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
    if (evalFunction) {
      setBtnCount(btnCount.concat(Codebubble(evalFunctionIndex)));
      setBtnIndex(btnIndex.concat(evalFunctionIndex));
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
        <div>
          {btnCount.map((element: any, index: number) => {
            return (
              <div key={index}>
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
