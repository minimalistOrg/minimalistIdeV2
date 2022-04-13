import ChooseType from "../ChooseType";
import { useState, useEffect } from "react";
import { api } from "../../../AST/data";

function CallExpression(props: any) {
  const data = props.data;
  // console.log(data.callee);

  const [isfunction, setIsfunction] = useState("");
  const [iffunction, setIffunction] = useState(false);
  const [indexFuction, setIndexFunction] = useState(null);

  useEffect(() => {
    if (data.callee.type === "Identifier") {
      setIsfunction("ast-CallExpression");
      setIffunction(true);
      setIndexFunction(SearchIndex())
    }
    // eslint-disable-next-line
  }, [data.callee.type]);

  const long = data.arguments.length;

  function coma(actual: number) {
    if (long - 1 === actual) {
      return "";
    } else {
      return " , ";
    }
  }

  function SearchIndex() {
    const dato = api.body;
    const index = () => {
      let rutaIndex = null;
      dato.forEach((e, index) => {
        let names = e.id;
        if (names?.name === data.callee.name) {
          rutaIndex = index;
        }
        if(names?.name === undefined){
          rutaIndex= null
        }
      });
      return rutaIndex;
    };

    return index()
  }

  return (
    <span>
      <span className={isfunction} data-event={iffunction} data-index={indexFuction}>
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
