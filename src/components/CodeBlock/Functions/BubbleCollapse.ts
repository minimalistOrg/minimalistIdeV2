export function BubbleCollapse(e: { currentTarget: HTMLElement }) {
  // console.log(e.currentTarget.parentNode.parentNode.nextElementSibling)
  const body = e.currentTarget.parentNode?.parentNode
    ?.parentNode as HTMLElement;
  maxHeightBody(body);
  let ElementHeight = e.currentTarget.parentNode?.parentNode
    ?.parentNode as HTMLElement;
  ElementHeight.style.minHeight = "30px";

  let ElementStyle = e.currentTarget.parentNode?.parentNode
    ?.parentNode as HTMLElement;
  ElementStyle.style.transition = "";

  // body.style= `max-height: ${body.clientHeight}px`
  body.classList.toggle("CodeBlock__body--collapse");
  e.currentTarget.classList.toggle("rotateIco-90");
}

export function maxHeightBody(element: HTMLElement) {
  // console.log("hi")
  setTimeout(() => {
    element.style.height =
      element.children[1].children[0].clientHeight + 34 + "px";
  }, 100);
  // console.log(element.children[1].clientHeight,element.children[1]);
}
