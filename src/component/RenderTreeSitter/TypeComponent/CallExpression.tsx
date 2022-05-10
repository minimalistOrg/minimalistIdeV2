import ChooseType from "../ChooseType";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function CallExpression(props: any) {
  const data = props.data;
  const [fnindex,setFnindex]= useState("")

  const listFN = useSelector((state: any) => state.addbubble.value);
  // 
  function validifFnCall() {
    const expre_is = data.children[0].type;
    if (expre_is === "identifier") {
      let result = listFN.find((json: any, index: number) => {
        if (json.node.children[1].text === data.children[0].text) {
          return index;
        }else{
          return ""
        }
      });
      // console.log(listFN.indexOf(r));
      setFnindex(listFN.indexOf(result))
    }

  }

  useEffect(() => {
    validifFnCall();
    //eslint-disable-next-line
  }, []);

  // console.log(data.walk());

  return (
    <span className="CallExpression" data-fn_declaration_index={fnindex} >
      <ChooseType info={data.children[0]} />
      <span>
        (<ChooseType info={data.children[1]} />)
      </span>
    </span>
  );
}

export default CallExpression;
