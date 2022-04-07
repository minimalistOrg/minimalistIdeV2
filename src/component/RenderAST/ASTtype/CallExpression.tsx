import ChooseType from "../ChooseType";
import { useState, useEffect } from "react";

function CallExpression(props: any) {
  const data = props.data;
  // console.log(data.callee);

  const [isfunction, setIsfunction] = useState("");

  useEffect(() => {
    if (data.callee.type === "Identifier") {
      setIsfunction("ast-CallExpression");
    }
  }, [data.callee.type]);

  const long = data.arguments.length;

  function coma(actual: number) {
    if (long - 1 === actual) {
      return "";
    } else {
      return " , ";
    }
  }

  return (
    <span>
      <span className={isfunction}>
        <ChooseType info={data.callee} />
      </span>
      <span>( </span>
      <span>
        {data.arguments.map((e: any, index: number) => {
          return (
            <span key={index}>
              <span>
                <ChooseType info={e} />
              </span>
              <span>{coma(index)}</span>
            </span>
          );
        })}
      </span>
      <span> )</span>
    </span>
  );
}

export default CallExpression;
