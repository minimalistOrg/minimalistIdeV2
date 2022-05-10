import Arguments from "./TypeComponent/Arguments";
import CallExpression from "./TypeComponent/CallExpression";
import ExpressionStatement from "./TypeComponent/ExpressionStatement";
import MemberExpression from "./TypeComponent/MemberExpression";
import StatementBlock from "./TypeComponent/StatementBlock";
import StringType from "./TypeComponent/String";
import LexicalDeclaration from "./TypeComponent/LexicalDeclaration";
import VariableDeclarator from "./TypeComponent/VariableDeclarator";
import NumberType from "./TypeComponent/NumberType";
import Identifier from "./TypeComponent/Identifier";
import BinaryExpression from "./TypeComponent/BinaryExpression"

function ChooseType(props: any): JSX.Element {
  function choose(info: any) {
    //
    switch (info.type) {
      case "binary_expression":
        return <BinaryExpression data={info} />
      case "identifier":
        return <Identifier data={info} />;
      case "number":
        return <NumberType data={info} />;
      case "variable_declarator":
        return <VariableDeclarator data={info} />;
      case "lexical_declaration":
        return <LexicalDeclaration data={info} />;
      case "string":
        return <StringType data={info} />;
      case "arguments":
        return <Arguments data={info} />;
      case "member_expression":
        return <MemberExpression data={info} />;
      case "call_expression":
        return <CallExpression data={info} />;
      case "expression_statement":
        return <ExpressionStatement data={info} />;
      case "statement_block":
        return <StatementBlock data={info} />;
      //simbols
      case ",":
        return <span>, </span>;
      case "(":
        return <></>;
      case ")":
        return <></>;
      case "{":
        return <></>;
      case "}":
        return <></>;
      case "+":
        return <> + </>;
      case "loading":
        return <p>Loading...</p>;
      default:
        console.warn(`the type ${info.type} is not define`);
        return <span style={{ color: "red" }}>{info.type}</span>;
    }
    //
  }

  return choose(props.info);
}

export default ChooseType;
