export function BubbleCollapse(e: any) {
  // console.log(e.currentTarget.parentNode.parentNode.nextElementSibling)
  const body = e.currentTarget.parentNode.parentNode.parentNode;
  maxHeightBody(body)
  e.currentTarget.parentNode.parentNode.parentNode.style.minHeight = "30px";
  e.currentTarget.parentNode.parentNode.parentNode.style.transition = "";
  // body.style= `max-height: ${body.clientHeight}px`
  body.classList.toggle("CodeBlock__body--collapse");
  e.currentTarget.classList.toggle("rotateIco-90");
}

export function maxHeightBody(element: any) {
  setTimeout(() => {
    element.style.height = (element.children[1].children[0].clientHeight + 34) + "px";
  }, 100);
  console.log(element.children[1].clientHeight,element.children[1]);
}
