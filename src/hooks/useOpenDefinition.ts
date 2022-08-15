import { CodeBlockCodeType } from "../types/interface";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { GlobalCounter } from "../components/RenderTreeSitter/util/useGlobalCounter";

export function useOpenDefinition(data: string, option: { tag: string[] }) {
  const element = useRef<HTMLElement>(null);
  const [fnindex, setFnindex] = useState(-1);
  const fnorder = GlobalCounter;

  const listFN = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  );

  function validifFnCall() {
    let position: CodeBlockCodeType | undefined = listFN.find(
      (e: CodeBlockCodeType) => e.name === data
    );
    if (position === undefined) {
      return -1;
    }
    setFnindex(position.id); //type number
  }

  useEffect(() => {
    const detectTag: HTMLElement = (element.current as HTMLElement).parentNode
      ?.parentNode as HTMLElement;
    const state: boolean[] = option.tag.map((e: string) => {
      return detectTag.classList.contains(e);
    });
    // console.log(state)
    const verification = state.includes(true);
    if (verification) {
      // console.log(detectTag);
      const fncall = element.current?.parentNode as HTMLElement;
      validifFnCall();
      if (fnindex > -1) {
        fncall.classList.add("CallExpression");
        fncall.dataset.name = data;

        let fndata = {
          params: [],
          name: data,
          index: fnindex,
          value: [],
          event: fnindex > -1 ? true : false,
          order: fnorder(),
          element: () => null,
          Bubble: () => null,
          visibility: true,
        };

        Object.defineProperty(fncall, "fninfo", {
          value: fndata,
          writable: true,
        });
      }
    }
    //eslint-disable-next-line
  }, [fnindex]);

  return element;
}
