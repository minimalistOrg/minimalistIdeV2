import ChooseType from "../ChooseType";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useGlobalCounter } from "../util/useGlobalCounter";

function CallExpression(props: any) {
  const data = props.data;
  const [fnindex, setFnindex] = useState("");
  const [name, setName] = useState("");
  const [event,setEvent] = useState(false)
  const expression = useRef(null);
  const fnOrder= useGlobalCounter()

  const listFN = useSelector((state: any) => state.addbubble.value);
  //
  function validifFnCall() {
    const expre_is = data.children[0].type;
    // console.log(listFN);

    if (expre_is === "identifier") {
      setName(data.children[0].text);
      setEvent(true)
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
    const fndata = {
      name: name,
      index: fnindex,
      value: [],
      event: event,
      order: fnOrder,
      element: expression.current
    };
    // console.log(fndata);
    validifFnCall();
    Object.defineProperty(expression.current, "fninfo", {
      value: fndata,
      writable: true,
    });
    //eslint-disable-next-line
  }, [name, fnindex]);

  // console.log(data.walk());

  return (
    <span className="CallExpression" ref={expression}>
      <ChooseType info={data.children[0]} />
      <span>
        (<ChooseType info={data.children[1]} />)
      </span>
    </span>
  );
}

export default CallExpression;
