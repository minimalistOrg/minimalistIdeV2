import ChooseType from "../ChooseType";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useGlobalCounter } from "../util/useGlobalCounter";
import { v4 as uuidv4 } from "uuid";
import {CodeBlockCodeType, FnInfoType, TypeComponentProps} from "../../../types/interface";

function CallExpression(props: TypeComponentProps) {
  const data = props.data;
  const [fnindex, setFnindex] = useState<string|number>("");
  const [name, setName] = useState("");
  const [event, setEvent] = useState(false);
  const [params, setParams] = useState([]);
  const [id, setId] = useState("");
  const [idelement, setIdelement] = useState("");
  const fnOrder = useGlobalCounter();

  const listFN = useSelector((state: {addbubble:{value:CodeBlockCodeType[]}}) => state.addbubble.value);

  //
  function validifFnCall() {
    const expre_is = data.children[0].type;

    if (expre_is === "identifier") {
      setName(data.children[0].text);
      setId(uuidv4());
      setIdelement(uuidv4())
      setEvent(true);
      setParams(data.children[1].children as []);
      let position:CodeBlockCodeType|undefined = listFN.find((e: CodeBlockCodeType) => e.name === data.children[0].text);
      if(position === undefined){
      return -1
      }
      setFnindex(position.id);//type number
    }
  }

  useEffect(() => {
    const fndata = {
      id: id,
      params: params,
      name: name,
      index: fnindex,
      value: [],
      event: fnindex === ""? false : true,
      order: fnOrder,
      element: ()=>{
        let result = document.getElementById("id" + idelement);
        return result;
      },
      Bubble: () => {
        let result = document.getElementById("id" + id);
        return result;
      },
      visibility: true,
    };
    validifFnCall();
    Object.defineProperty(fndata.element(), "fninfo", {
      value: fndata,
      writable: true,
    });
    //eslint-disable-next-line
  }, [name, fnindex]);

  function fnHover(data: {currentTarget: HTMLElement & FnInfoType | null}) {
    if (!(data.currentTarget?.fninfo?.Bubble() === null)) {
      data.currentTarget?.fninfo?.Bubble()?.classList.add("CodeBlockHover");
      data.currentTarget?.fninfo
        .Bubble()?.children[0].classList.add("CodeBlock__header--hover");
    }
  }

  function fnHoverClose(data: {currentTarget:HTMLElement & FnInfoType | null}) {
    if (!(data.currentTarget?.fninfo.Bubble() === null)) {
      data.currentTarget?.fninfo.Bubble()?.classList.remove("CodeBlockHover");
      data.currentTarget?.fninfo
        .Bubble()?.children[0].classList.remove("CodeBlock__header--hover");
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
      onMouseOver={fnHover as ()=>void}
      onMouseLeave={fnHoverClose as ()=>void}
      id={"id"+idelement}
    >
      <ChooseType info={data.children[0]} />
      <span>
        <ChooseType info={data.children[1]} />
      </span>
    </span>
  );
}

export default CallExpression;
