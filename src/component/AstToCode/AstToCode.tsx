import React from "react";
import "./AstToCode.css";

function AstToCode(props: any) {
  console.log(props.body);

  function SelectType(ExpressionType: any) {
    switch (ExpressionType.type) {
      case "ExpressionStatement":
        return ExpressionType.expression.callee.name;
      default:
        return "";
    }
  }

  function addComa(index: number, pointNow: number) {
    if (index < pointNow - 1) {
      return <span>,</span>;
    }
  }

  return (
    <React.Fragment>
      {props.body.map((e: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <span className="OneLine">
              <span key={index} className="ExpressionStatement">
                {SelectType(e)}
              </span>
              <span className="ExpressionStatement__parameters">
                (
                {e.expression.arguments.map((valor: any, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      <span className="ExpressionStatement__parameters-value">
                        {valor.value}
                      </span>
                      {addComa(index, e.expression.arguments.length)}
                    </React.Fragment>
                  );
                })}
                )
              </span>
            </span>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default AstToCode;
