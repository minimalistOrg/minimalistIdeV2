import ChooseType from "../ChooseType";
import { useState, useEffect } from "react";
import { api } from "../../../AST/data";
import { useSelector } from "react-redux";

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

  const addBubble:any= useSelector<any>((state)=> state.addbubble.value) 
  function test() {
    const dato = api.body;
    const t = () => {
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
    addBubble.add(t())
    // console.log(t());
  }

  return (
    <span>
      <span className={isfunction} onClick={test}>
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
