import ChooseType from "../ChooseType";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function CallExpression(props: any) {
  const data = props.data;
  const [fnindex, setFnindex] = useState("");
  const [name, setName] = useState("");

  const listFN = useSelector((state: any) => state.addbubble.value);
  //
  function validifFnCall() {
    const expre_is = data.children[0].type;
    console.log(listFN);

    if (expre_is === "identifier") {
      setName(data.children[0].text);
      let result = listFN.find((json: any, index: number) => {
        if (json.node.children[1].text === data.children[0].text) {
          return index;
        } else {
          if (json.node.type === "lexical_declaration") {
            // console.log(expre_is,json.node,"here")
            return index;
          } else {
            return "";
          }
        }
      });
      // console.log(listFN.indexOf(r));
      setFnindex(listFN.indexOf(result));
    }
  }

  useEffect(() => {
    validifFnCall();
    //eslint-disable-next-line
  }, []);

  // console.log(data.walk());

  return (
    <span
      className="CallExpression"
      data-fn_declaration_index={fnindex}
      data-name={name}
    >
      <ChooseType info={data.children[0]} />
      <span>
        (<ChooseType info={data.children[1]} />)
      </span>
    </span>
  );
}

export default CallExpression;
