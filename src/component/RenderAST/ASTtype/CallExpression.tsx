import ChooseType from "../ChooseType";
import { useState, useEffect } from "react";
import { api } from "../../../AST/data";

function CallExpression(props: any) {
  const data = props.data;
  // console.log(data.callee);

  const [isfunction, setIsfunction] = useState("");
  const [iffunction, setIffunction] = useState(false);
  const [indexFuction, setIndexFunction] = useState<any>(null);

  useEffect(() => {
    if (data.callee.type === "Identifier") {
      setIsfunction("ast-CallExpression");
      setIffunction(true);
      setIndexFunction(SearchIndex());
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

    function index() {
      let point = null;

      let Niteracion = 0;
      let validation = true;
      while (validation) {
        validation = !(dato[Niteracion].id?.name === data.callee.name);
        point = Niteracion;
        Niteracion = Niteracion + 1;
      }

      return point;
    }

    return index();
  }

  return (
    <span>
      <span
        className={isfunction}
        data-event={iffunction}
        data-index={indexFuction + ""}
      >
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
