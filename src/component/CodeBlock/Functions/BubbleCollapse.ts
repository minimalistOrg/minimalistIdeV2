export function BubbleCollapse(e: any) {
  // console.log(e.currentTarget.parentNode.parentNode.nextElementSibling)
  const body = e.currentTarget.parentNode.parentNode.nextElementSibling;
  e.currentTarget.parentNode.parentNode.parentNode.style = "height: auto";
  // body.style= `max-height: ${body.clientHeight}px`
  body.classList.toggle("CodeBlock__body--collapse");
  e.currentTarget.classList.toggle("rotateIco-90");
}

export function maxHeightBody(element: any) {
  // console.log(element.lastChild.clientHeight)
  const body = element.lastChild;
  function out() {
    // console.log(body.clientHeight)
    if (body.clientHeight === 0) {
    } else {
      body.style = "";
      body.style = `max-height: ${body.clientHeight}px;`;
    }
  }
  out();
  // new ResizeObserver(out).observe(body)
}
