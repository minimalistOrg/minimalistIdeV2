export function HoverIdentifier(event: any) {
  const condition = event.target.getAttribute("data-idhover");
  if (condition) {
    HoverIdentifierRemove();
    const style = document.createElement("style");
    style.id = "IdHover";
    style.innerHTML = `
      .CodeBlock:hover .ast-identifier-${condition}{
          background-color: var(--bg-highligth-function);
          transition: var(--bgt-bubble-header);
      }
      .CodeBlock:hover .ast-CallExpression > .ast-identifier-${condition}{
          background-color: transparent;
          transition: none;
      }
    `;
    document.body.appendChild(style);
  } else {
    HoverIdentifierRemove();
  }
}

export function HoverIdentifierRemove() {
  document.getElementById("IdHover")?.remove();
}

export function hoverState(e: any) {
  // eslint-disable-next-line
  const evalFunction: boolean = eval(
    e.target.parentNode.getAttribute("data-hover")
  );
  // eslint-disable-next-line
  const evalFunctionOrder: number = eval(
    e.target.parentNode.getAttribute("data-order")
  );

  if (evalFunction) {
    document.getElementById("style-hover")?.remove();
    // console.log(e.currentTarget.parentNode.parentNode);
    const node = document.createElement("style");
    node.id = "style-hover";
    let style = `.pointRef:hover + .ColBubbles > div > .grandparentHover-${evalFunctionOrder} > .pointRef > .CodeBlock {
                      box-shadow: var(--bs-bubble); 
                      transition: var(--bst-bubble); 
                  }

                  .pointRef:hover + .ColBubbles > div > .grandparentHover-${evalFunctionOrder} > .pointRef > .CodeBlock > .CodeBlock__header {
                      background-color: var(--bg-bubble-header);
                      transition: var(--bgt-bubble-header); 
                  }



                  `;
    node.innerHTML = style;
    document.body.appendChild(node);
  } else {
    document.getElementById("style-hover")?.remove();
  }
}

export function hoverHeader(e: any) {
  const grandparentHover =
    e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode
      .parentNode;

  e.currentTarget.parentNode.classList.add("CodeBlockHover");
  const style = document.createElement("style");
  style.id = "titleHover";
  style.innerHTML = `
.${grandparentHover.classList.value}:hover >
.pointRef > 
.CodeBlock >
.CodeBlock__body >
pre >
code .ast-function-${e.currentTarget.getAttribute(
    "data-title"
  )}-${e.currentTarget.getAttribute("data-order")}
{
  background-color: var(--bg-highligth-function);
  transition: var(--bgt-bubble-header);
}
      `;
  document.body.appendChild(style);

  const inheritParam = e.target.parentNode.getAttribute("data-params");
  if (e.target.getAttribute("data-idhover")) {
    // console.log(inheritParam);

    const style = document.createElement("style");
    style.id = "paramsHover";
    style.innerHTML = `
.${grandparentHover.classList.value}:hover >
.pointRef > 
.CodeBlock >
.CodeBlock__body >
pre >
code .ast-identifier-${inheritParam}
{
  background-color: var(--bg-highligth-function);
  transition: var(--bgt-bubble-header);
}
      `;
    document.body.appendChild(style);
  }
}

export function hoverHeaderLose(e: any) {
  e.currentTarget.parentNode.classList.remove("CodeBlockHover");
  document.getElementById("titleHover")?.remove();
  document.getElementById("paramsHover")?.remove();
}

let watch = 0;
export function highligthToogle(e: any) {
  const element = e.target.parentNode;
  const validation = element.querySelector(".p3[data-idhover]");
  if (e.target.getAttribute("data-idhover")) {
    // console.log(e.target);

    const searchInBox = e.currentTarget.querySelectorAll(
      `span[class~="ast-identifier-${validation.getAttribute("data-idhover")}"]`
    );

    if (watch > 6) {
      watch = 1;
    } else {
      watch = watch + 1;
    }

    searchInBox.forEach((e: any) => {
      let state = e.getAttribute("data-toggle");
      if (!state) {
        e.removeAttribute("data-toggle");
        e.classList.toggle("highligth-c" + watch);
        e.setAttribute("data-toggle", "highligth-c" + watch);
      } else {
        e.removeAttribute("data-toggle");
        e.classList.toggle(state);
      }
    });
  }
}

export function close(e: any, close: any) {
  // console.log(close)
  let removeBubble = close.parent.indexOf(close.child);
  close.parent.splice(removeBubble, 1);
  const element =
    e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode
      .parentNode.parentNode;
  const json = e.currentTarget.parentNode;
  const name = json.getAttribute("data-title");
  const index = json.getAttribute("data-order");
  const fnCall = element.querySelectorAll(
    `.pointRef > .CodeBlock > .CodeBlock__body > pre > code .ast-function-${name}-${index} > .ast-CallExpression`
  )[0];
  fnCall.setAttribute("data-event","true")

  hoverHeaderLose(e);
  // removeBubble.remove();
  const HTML = document.getElementsByTagName("html")[0];
  HTML.setAttribute("style", "cursor:default");
  // // console.log(HTML)
}
