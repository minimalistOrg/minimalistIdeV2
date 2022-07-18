import {
  TypeComponentProps,
  CodeBlockCodeType,
} from "../../../types/interface";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Identifier(props: TypeComponentProps & { type: string }) {
  const data = props.data;
  // console.log(data)
  const element = useRef<HTMLElement>(null);
  const [fnindex, setFnindex] = useState(-1);

  const listFN = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  );

  function validifFnCall() {
    let position: CodeBlockCodeType | undefined = listFN.find(
      (e: CodeBlockCodeType) => e.name === data.text
    );
    if (position === undefined) {
      return -1;
    }
    setFnindex(position.id); //type number
  }

  useEffect(() => {
    const detectTag = (element.current as HTMLElement).parentNode?.parentNode;
    if (
      (detectTag as HTMLElement).classList.contains("JsxSelfClosingElement")
    ) {
      // console.log(detectTag);
      const fncall = element.current?.parentNode as HTMLElement;
      fncall.classList.add("CallExpression");
      fncall.dataset.name = data.text;

      let fndata = {
        params: [],
        name: data.text,
        index: fnindex,
        value: [],
        event: true,
        order: 0,
        element: () => null,
        Bubble: () => null,
        visibility: true,
      };

      validifFnCall();
      Object.defineProperty(fncall, "fninfo", {
        value: fndata,
        writable: true,
      });
    }
  }, [fnindex]);

  return (
    <span ref={element} data-identifier={data.text} className={props.type}>
      {data.text}
    </span>
  );
}

export default Identifier;
