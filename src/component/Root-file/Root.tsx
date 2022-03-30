import "./Root.css";
// import CodeBlock from "../CodeBlock/CodeBlock";
import CodeBlockAST from "../CodeBlockAST/CodeBlockAST";
import { api } from "../../AST/data";

function Root(): JSX.Element {

  function SearchFunction(word: string): any {
    let result:any = [];

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

  const firstRender = (list: any, index: number) => {
    if (list.type === "ExpressionStatement") {
      return (
        <CodeBlockAST
          key={index}
          // @ts-ignore
          title={api.body[index].expression.callee.name}
          // @ts-ignore
          body={SearchFunction(api.body[index].expression.callee.name)}
          argument=""
       />
         
      );
    } else {
      return ;
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
