import VariableDeclaration from "./ASTtype/VariableDeclaration";
import Literal from "./ASTtype/Literal";
import BinaryExpression from "./ASTtype/BinaryExpression";
import LogicalExpression from "./ASTtype/LogicalExpression"
import ObjectExpression from "./ASTtype/ObjectExpression";
import ArrayExpression from "./ASTtype/ArrayExpression";
import ReturnStatement from "./ASTtype/ReturnStatement"
import CallExpression from "./ASTtype/CallExpression"
import ExpressionStatement from "./ASTtype/ExpressionStatement"
import Identifier from "./ASTtype/Identifier"
import IfStatement from "./ASTtype/IfStatement"
import MemberExpression from "./ASTtype/MemberExpression"

function ChooseType(props: any):JSX.Element {
  function choose(info: any) {
    //
    switch (info.type) {
      case "VariableDeclaration":
        return <VariableDeclaration data={info} />;
      case "LogicalExpression":
        return <LogicalExpression data={info}/>
      case "ObjectExpression":
        return <ObjectExpression data={info}/>
      case "ArrayExpression":
        return <ArrayExpression data={info}/>
      case "ReturnStatement":
        return <ReturnStatement data={info}/>
      case "CallExpression":
        return <CallExpression data={info} />
      case "ExpressionStatement":
        return <ExpressionStatement data={info} />
      case "Identifier":
        return <Identifier data={info} />
      case "IfStatement":
        return <IfStatement data={info} />
      case "MemberExpression":
        return <MemberExpression data={info} />
      //type primitive
      case "Literal":
        return <Literal data={info} />;
      case "BinaryExpression":
        return <BinaryExpression data={info} />;
      default:
        console.warn(`the type ${info.type} is not define`);
      return <span style={{color:"red"}}>{info.type}</span>;
    }
    //
  }

  return choose(props.info);
}

export default ChooseType;
