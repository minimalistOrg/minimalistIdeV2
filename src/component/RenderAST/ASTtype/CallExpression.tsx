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

  const [isfunction, setIsfunction] = useState("");
  const [iffunction, setIffunction] = useState<boolean>(false);
  const [indexFuction, setIndexFunction] = useState<number | null>(null);
  const [callFunctionclass,setCallFunctionclass]= useState("")

  const RenderNumber: number = useGlobalCounter();

  let NumberReal: number | null = null;

  if (data.callee.type === "Identifier") {
    NumberReal = RenderNumber;
  }

  useEffect(() => {
    if (data.callee.type === "Identifier") {
      setIsfunction("ast-CallExpression");
      setCallFunctionclass("ast-call")
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

function classlistobj(){
  if(data.callee.name === undefined){
    return ""
  }else{
    return data.callee.name + ""
  }
}

  return (
    <span className={`${callFunctionclass} ast-function-${classlistobj()}-${NumberReal}`}>
      <span
        className={isfunction}
        data-event={iffunction}
        data-index={indexFuction + ""}
        data-order={NumberReal}
        data-hover="true"
      >
        <ChooseType info={data.callee} />
      </span>
      <span data-hover="true" data-order={NumberReal}>( </span>
      <span data-hover="true" data-order={NumberReal}>
        {data.arguments.map((e: any, index: number) => {
          return (
            <span data-hover="true" key={index}>
              <span data-hover="true" data-order={NumberReal} className="ast-params">
                <ChooseType info={e} order={NumberReal} />
              </span>
              <span data-hover="true" data-order={NumberReal}>{Coma(index, long)}</span>
            </span>
          );
        })}
      </span>
      <span data-hover="true" data-order={NumberReal}> )</span>
    </span>
  );
}

export default CallExpression;
