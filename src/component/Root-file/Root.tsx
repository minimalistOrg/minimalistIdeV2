import "./Root.css";
// import CodeBlock from "../CodeBlock/CodeBlock";
import CodeBlockAST from "../CodeBlockAST/CodeBlockAST";
import { api } from "../../AST/data";
import { useState } from "react";

function Root(): JSX.Element {
  function SearchFunction(word: string): any {
    let result: any = [];

    api.body.find(function (e) {
      if (e.type === "FunctionDeclaration" && e.id?.name === word) {
        // console.log(e.body?.body);
        result.push(e.body);
        return "";
      } else {
        return "";
      }
    });

    return result[0].body;
  }

  const [nuberBubbles, setNumberBubbles] = useState<any>([]);

  function addBubbles(title: any) {
    setNumberBubbles(nuberBubbles.concat({ title: title }));

    console.log(nuberBubbles);
  }

  const firstRender = (list: any, index: number) => {
    if (list.type === "ExpressionStatement") {
      return (
        <div key={index} style={{ display: "flex" }}>
          <CodeBlockAST
            // @ts-ignore
            title={api.body[index].expression.callee.name}
            pass={addBubbles}
            // @ts-ignore
            body={SearchFunction(api.body[index].expression.callee.name)}
            argument=""
          />
          {nuberBubbles.map((e: any, index: number) => (
            <CodeBlockAST
              key={index}
              // @ts-ignore
              title={nuberBubbles[index].title}
              pass={addBubbles}
              body={
                /*SearchFunction("suma")*/ SearchFunction(
              // @ts-ignore
                  api.body[3].expression.callee.name
                )
              }
              argument="a,b"
            />
          ))}{" "}
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <section>
      {api.body.map((i, index) => {
        return firstRender(i, index);
      })}
    </section>
  );
}

export default Root;
