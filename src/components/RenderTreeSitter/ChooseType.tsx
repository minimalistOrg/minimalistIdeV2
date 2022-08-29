import Arguments from "./TypeComponent/Arguments";
import { CallExpression } from "./TypeComponent/CallExpression";
import ExpressionStatement from "./TypeComponent/ExpressionStatement";
import MemberExpression from "./TypeComponent/MemberExpression";
import StatementBlock from "./TypeComponent/StatementBlock";
import StringType from "./TypeComponent/String";
import LexicalDeclaration from "./TypeComponent/LexicalDeclaration";
import VariableDeclarator from "./TypeComponent/VariableDeclarator";
import NumberType from "./TypeComponent/NumberType";
import Identifier from "./TypeComponent/Identifier";
import BinaryExpression from "./TypeComponent/BinaryExpression";
import ReturnStatement from "./TypeComponent/ReturnStatement";
import IfStatement from "./TypeComponent/IfStatement";
import ElseClause from "./TypeComponent/ElseClause";
import ParenthesizedExpression from "./TypeComponent/ParenthesizedExpression";
import ArrowFunction from "./TypeComponent/ArrowFunction";
import FormalParameters from "./TypeComponent/FormalParameters";
import TemplateString from "./TypeComponent/TemplateString";
import TemplateSubstitution from "./TypeComponent/TemplateSubstitution";
import UnaryExpression from "./TypeComponent/UnaryExpression";
import Comment from "./TypeComponent/Comment";
import ObjectPattern from "./TypeComponent/ObjectPattern";
import ShorthandPropertyIdentifierPattern from "./TypeComponent/ShorthandPropertyIdentifierPattern";
import SubscriptExpression from "./TypeComponent/SubscriptExpression";
import AssigmentExpression from "./TypeComponent/AssigmentExpression";
import VariableDeclaration from "./TypeComponent/VariableDeclaration";
import ForStatement from "./TypeComponent/ForStatement";
import Array from "./TypeComponent/Array";
import ContinueStatement from "./TypeComponent/ContinueStatement";
import UpdateExpression from "./TypeComponent/UpdateExpression";
import PropertyIdentifier from "./TypeComponent/PropertyIdentifier";
import JsxElement from "./TypeComponent/JsxElement";
import JsxOpeningElement from "./TypeComponent/JsxOpeningElement";
import JsxClosingElement from "./TypeComponent/JsxClosingElement";
import JsxAttributeElement from "./TypeComponent/JsxAttribute";
import JsxSelfClosingElement from "./TypeComponent/JsxSelfClosingElement";
import JsxExpression from "./TypeComponent/JsxExpression";
import JsxText from "./TypeComponent/JsxText";
import ArrayPattern from "./TypeComponent/ArrayPattern";
import JsxFragment from "./TypeComponent/JsxFragment";
import TernaryExpression from "./TypeComponent/TernaryExpression";
import Object from "./TypeComponent/Object";
import Pair from "./TypeComponent/Pair";
import AugmentedAssignmentExpression from "./TypeComponent/AugmentedAssignmentExpression";
import PairPattern from "./TypeComponent/PairPattern";
import WhileStatement from "./TypeComponent/WhileStatement";
import DoStatement from "./TypeComponent/DoStatement";
import SwitchStatement from "./TypeComponent/SwitchStatement";
import SwitchBody from "./TypeComponent/SwitchBody";
import SwitchCase from "./TypeComponent/SwitchCase";
import BreakStatementcase from "./TypeComponent/BreakStatementcase";
import SwitchDefault from "./TypeComponent/SwitchDefault";
import ForInStatement from "./TypeComponent/ForInStatement";
import TryStatement from "./TypeComponent/TryStatement";
import CatchClause from "./TypeComponent/CatchClause";
import NestedIdentifier from "./TypeComponent/NestedIdentifier";
import TypeAnnotation from "./TypeComponent/TypeAnnotation";
import { TreesitterData, TypeComponentProps } from "../../types/interface";

function UniversalType(props: TypeComponentProps & { type: string }) {
  const data = props.data;

  if (data.children.length > 1) {
    return (
      <span className={props.type}>
        {data.children.map((e: TreesitterData, index: number) => {
          return (
            <span key={index}>
              <ChooseType info={e} />
            </span>
          );
        })}
      </span>
    );
  } else {
   return <span className={props.type}> {data.text} </span>;
  }
}

function ChooseType(props: {
  info: TreesitterData | { type: string; text: string } | undefined;
}): JSX.Element {
  function choose(info: TreesitterData) {
    //
    switch (info.type) {
      //ts
      case "type_annotation":
        return <TypeAnnotation data={info} />;
      //js
      case "catch_clause":
        return <CatchClause data={info} />;
      case "nested_identifier":
        return <NestedIdentifier data={info} />;
      case "try_statement":
        return <TryStatement data={info} />;
      case "for_in_statement":
        return <ForInStatement data={info} />;
      case "switch_default":
        return <SwitchDefault data={info} />;
      case "break_statement":
        return <BreakStatementcase data={info} />;
      case "switch_case":
        return <SwitchCase data={info} />;
      case "switch_body":
        return <SwitchBody data={info} />;
      case "switch_statement":
        return <SwitchStatement data={info} />;
      case "do_statement":
        return <DoStatement data={info} />;
      case "while_statement":
        return <WhileStatement data={info} />;
      case "augmented_assignment_expression":
        return <AugmentedAssignmentExpression data={info} />;
      case "pair":
        return <Pair data={info} />;
      case "pair_pattern":
        return <PairPattern data={info} />;
      case "object":
        return <Object data={info} />;
      case "ternary_expression":
        return <TernaryExpression data={info} />;
      case "array_pattern":
        return <ArrayPattern data={info} />;
      case "jsx_fragment":
        return <JsxFragment data={info} />;
      case "jsx_text":
        return <JsxText data={info} />;
      case "jsx_expression":
        return <JsxExpression data={info} />;
      case "jsx_self_closing_element":
        return <JsxSelfClosingElement data={info} />;
      case "jsx_attribute":
        return <JsxAttributeElement data={info} />;
      case "jsx_closing_element":
        return <JsxClosingElement data={info} />;
      case "jsx_opening_element":
        return <JsxOpeningElement data={info} />;
      case "jsx_element":
        return <JsxElement data={info} />;
      case "property_identifier":
        return <PropertyIdentifier data={info} />;
      case "update_expression":
        return <UpdateExpression data={info} />;
      case "continue_statement":
        return <ContinueStatement data={info} />;
      case "array":
        return <Array data={info} />;
      case "for_statement":
        return <ForStatement data={info} />;
      case "variable_declaration":
        return <VariableDeclaration data={info} />;
      case "assignment_expression":
        return <AssigmentExpression data={info} />;
      case "subscript_expression":
        return <SubscriptExpression data={info} />;
      case "shorthand_property_identifier_pattern":
        return <ShorthandPropertyIdentifierPattern data={info} />;
      case "object_pattern":
        return <ObjectPattern data={info} />;
      case "comment":
        return <Comment data={info} />;
      case "unary_expression":
        return <UnaryExpression data={info} />;
      case "template_substitution":
        return <TemplateSubstitution data={info} />;
      case "template_string":
        return <TemplateString data={info} />;
      case "formal_parameters":
      case "required_parameter":
        return <FormalParameters type={info.type} data={info} />;
      case "arrow_function":
        return <ArrowFunction data={info} />;
      case "parenthesized_expression":
        return <ParenthesizedExpression data={info} />;
      case "else_clause":
        return <ElseClause data={info} />;
      case "if_statement":
        return <IfStatement data={info} />;
      case "return_statement":
        return <ReturnStatement data={info} />;
      case "binary_expression":
        return <BinaryExpression data={info} />;
      case "identifier":
      case "type_identifier":
        return <Identifier type={info.type} data={info} />;
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
      //
      case "while":
        return <span className="ReservedWords">while</span>;
      case "do":
        return <span className="ReservedWords">do</span>;
      case "if":
        return <span className="ReservedWords">if</span>;
      case "else":
        return <span className="ReservedWords">else</span>;
      case "continue":
        return <span className="ReservedWords">continue</span>;
      case "switch":
        return <span className="ReservedWords">switch</span>;
      case "case":
        return <span className="ReservedWords">case</span>;
      case "break":
        return <div className="ReservedWords">break</div>;
      case "default":
        return <span className="ReservedWords">default</span>;
      case "in":
        return <span className="ReservedWords">in</span>;
      case "try":
        return <span className="ReservedWords">try</span>;
      case "catch":
        return <span className="ReservedWords">catch</span>;
      //simbols
      case ",":
        return <span>, </span>;
      case "(":
        return <>(</>;
      case ")":
        return <>)</>;
      case "{":
        return <>{"{"}</>;
      case "}":
        return <>{"}"}</>;
      case "+":
        return <>+</>;
      case "++":
        return <>++</>;
      case "/":
        return <>/</>;
      case "*":
        return <>*</>;
      case "-":
        return <>-</>;
      case "--":
        return <>--</>;
      case ">":
        return <> {">"} </>;
      case "<":
        return <> {"<"} </>;
      case "===":
        return <> === </>;
      case "=":
        return <> = </>;
      case "==":
        return <> == </>;
      case "+=":
        return <> += </>;
      case "!==":
        return <>!== </>;
      case "!":
        return <>!</>;
      case "||":
        return <>||</>;
      case "=>":
        return <> {"=>"} </>;
      case "<=":
        return <> {"<="} </>;
      case ">=":
        return <> {">="} </>;
      case "&&":
        return <> {"&&"} </>;
      case "${":
        return <>{"${"}</>;
      case "[":
        return <>[</>;
      case "]":
        return <>]</>;
      case ";":
        return <>;</>;
      case ":":
        return <>:</>;
      case "?":
        return <>?</>;
      case ".":
        return <>.</>;
      case "var":
        return <span className="LexicalDeclaration__variableType">var</span>;
      case "const":
        return <span className="LexicalDeclaration__variableType">const</span>;
      case "for":
        return <span className="ReservedWords">for</span>;
      case "false":
        return <span className="TypeBoolean">false</span>;
      case "null":
        return <span className="TypeBoolean">null</span>;
      case "true":
        return <span className="TypeBoolean">true</span>;
      case "`":
        return <>{"`"}</>;
      case "loading":
        return <p>Loading...</p>;
      default:
        return <UniversalType data={info} type={info.type} />;
      // console.warn(`the type ${info.type} is not define`);
      // return <span style={{ color: "red" }}>{info.type}</span>;
    }
    //
  }

  return choose(props.info as TreesitterData);
}

export default ChooseType;

// function AllOperator(){
//
// }
