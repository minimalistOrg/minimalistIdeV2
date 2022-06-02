import ChooseType from "../ChooseType";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useGlobalCounter } from "../util/useGlobalCounter";
import { v4 as uuidv4 } from "uuid";

function CallExpression(props: any) {
  const data = props.data;
  const [fnindex, setFnindex] = useState("");
  const [name, setName] = useState("");
  const [event, setEvent] = useState(false);
  const [params, setParams] = useState([]);
  const [id, setId] = useState("");
  const expression = useRef<any>(null);
  const fnOrder = useGlobalCounter();

  const listFN = useSelector((state: any) => state.addbubble.value);

  //
  function validifFnCall() {
    const expre_is = data.children[0].type;
    // console.log(listFN);

    if (expre_is === "identifier") {
      setName(data.children[0].text);
      setId(uuidv4());
      setEvent(true);
      setParams(data.children[1].children);
      let position = listFN.find((e: any) => e.name === data.children[0].text);
      setFnindex(position.id);
    }
  }

  useEffect(() => {
    const fndata = {
      id: id,
      params: params,
      name: name,
      index: fnindex,
      value: [],
      event: event,
      order: fnOrder,
      element: expression.current,
      Bubble: () => {
        let result = document.getElementById("id" + id);
        return result;
      },
      visibility: true,
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
  function fnHover(data: any) {
    // console.log(data.currentTarget,"here")
    if (!(data.currentTarget.fninfo.Bubble() === null)) {
      data.currentTarget.fninfo.Bubble().classList.add("CodeBlockHover");
      data.currentTarget.fninfo
        .Bubble()
        .children[0].classList.add("CodeBlock__header--hover");
    }
  }

  function fnHoverClose(data: any) {
    if (!(data.currentTarget.fninfo.Bubble() === null)) {
      data.currentTarget.fninfo.Bubble().classList.remove("CodeBlockHover");
      data.currentTarget.fninfo
        .Bubble()
        .children[0].classList.remove("CodeBlock__header--hover");
    }
  }

  function typeCall() {
    if (event) {
      return "CallExpression";
    } else {
      return "CallExpression--member_expression";
    }
  }

  return (
    <span
      className={typeCall()}
      onMouseOver={fnHover}
      onMouseLeave={fnHoverClose}
      ref={expression}
    >
      <ChooseType info={data.children[0]} />
      <span>
        <ChooseType info={data.children[1]} />
      </span>
    </span>
  );
}

export default CallExpression;
