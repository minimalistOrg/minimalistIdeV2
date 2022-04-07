import "./Root.css";
import CodeBlock from "../CodeBlock/CodeBlock";
import {api} from "../../AST/data"
import RenderAST from "../RenderAST/RenderAST";

function Root(): JSX.Element {

  const dataAst= api.body[0].body?.body

return (
  <div>
    <CodeBlock title="main" argument="">
      <RenderAST ast={dataAst} />
    </CodeBlock>
  </div>
)
}

export default Root;
