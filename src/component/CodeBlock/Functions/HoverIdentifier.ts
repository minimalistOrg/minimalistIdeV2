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
    let style = `.pointRef:hover + .ColBubbles > .order[style="order: ${evalFunctionOrder};"] > div > div > div > .CodeBlock {
                      box-shadow: var(--bs-bubble); 
                      transition: var(--bst-bubble); 
                  }

                  .pointRef:hover + .ColBubbles > .order[style="order: ${evalFunctionOrder};"] > div > div > div > .CodeBlock > .CodeBlock__header {
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
      .parentNode.parentNode;

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
}

export function hoverHeaderLose(e: any) {
  e.currentTarget.parentNode.classList.remove("CodeBlockHover");
  document.getElementById("titleHover")?.remove();
}
