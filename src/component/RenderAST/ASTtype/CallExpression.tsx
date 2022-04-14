import ChooseType from "../ChooseType";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGlobalCounter } from "./useGlobalCounter";
import {
  CallExpressionType,
  reduxSliceaddBubble,
} from "./interfaceType";
import { Coma } from "./Coma";

function CallExpression(props: CallExpressionType): JSX.Element {
  const data: any = props.data;
  const count: any = useSelector<reduxSliceaddBubble>(
    (state) => state.addbubble.value
  );

  const [isfunction, setIsfunction] = useState<string>("");
  const [iffunction, setIffunction] = useState<boolean>(false);
  const [indexFuction, setIndexFunction] = useState<number | null>(null);

  const RenderNumber: number = useGlobalCounter();

  let NumberReal: number | null = null;

  if (data.callee.type === "Identifier") {
    NumberReal = RenderNumber;
  }

  useEffect(() => {
    if (data.callee.type === "Identifier") {
      setIsfunction("ast-CallExpression");
      setIffunction(true);
      setIndexFunction(SearchIndex());
    }
    // eslint-disable-next-line
  }, [data.callee.type]);

  const long: number = data.arguments.length;

  function SearchIndex():number | null {
    const dato = count;

    function index(): number | null {
      let point: number | null = null;

      let Niteracion: number = 0;
      let validation: boolean = true;
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
        data-order={NumberReal}
      >
        <ChooseType info={data.callee} />
      </span>
      <span>( </span>
      <span>
        {data.arguments.map((e: any, index: number) => {
          return (
            <span key={index}>
              <span className="ast-params">
                <ChooseType info={e} />
              </span>
              <span>{Coma(index, long)}</span>
            </span>
          );
        })}
      </span>
      <span> )</span>
    </span>
  );
}

export default CallExpression;
