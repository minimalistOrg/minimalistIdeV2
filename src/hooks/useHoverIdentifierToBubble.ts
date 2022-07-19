import { useEffect, useRef } from "react";
import { FnInfoType } from "../types/interface";

export function useHoverIdentifierToBubble() {
  function inside(event: any) {
    const check =
      event.currentTarget.parentNode.classList.contains("CallExpression");
    if (check) {
      const Bubble = event.currentTarget.parentNode.fninfo.Bubble();
      if (Bubble !== null) {
        Bubble.classList.add("CodeBlockHover");
        Bubble.children[0].classList.add("CodeBlock__header--hover");
      }
    }
    // Bubble.classList.add("CallExpression")
  }
  function outside(event: any) {
    const check =
      event.currentTarget.parentNode.classList.contains("CallExpression");
    if (check) {
      const Bubble = event.currentTarget.parentNode.fninfo.Bubble();
      if (Bubble !== null) {
        Bubble.classList.remove("CodeBlockHover");
        Bubble.children[0].classList.remove("CodeBlock__header--hover");
      }
    }
    // Bubble.classList.add("CallExpression")
  }

  return { inside, outside };
}
