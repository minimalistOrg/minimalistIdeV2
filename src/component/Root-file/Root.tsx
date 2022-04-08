import "./Root.css";
import CodeBlock from "../CodeBlock/CodeBlock";
import { api } from "../../AST/data";
import RenderAST from "../RenderAST/RenderAST";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {add} from "./slice/addBubbleSlice"

function Root(): JSX.Element {
  const dataAst = api.body[0].body?.body;

  const [bubble, setBubble] = useState<any>([]);
  const count = useSelector<any>((state) => state.addbubble.value);
console.log(count)
function addBubble(data:any) {
    setBubble(bubble.concat(data));
    console.log(bubble,"here")
  }

  const sendFunction= useDispatch();

  useEffect( ()=>{
    sendFunction(add({add: addBubble}))
// eslint-disable-next-line
  } ,[bubble])

  return (
    <div style={{ display: "flex" }}>
        <div>
          <CodeBlock title="main" argument="">
            <RenderAST ast={dataAst} />
          </CodeBlock>
        </div>
      <div>
        {bubble.map((e: any, index: number) => {
          return (
            <CodeBlock key={index} title="main" argument="">
              <RenderAST ast={api.body[e].body?.body} />
            </CodeBlock>
          );
        })}
      </div>
    </div>
  );
}

export default Root;
