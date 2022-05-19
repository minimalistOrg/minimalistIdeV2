import interact from "interactjs";
import { MutableRefObject } from "react";

export default function Resize(
  id: any,
  idCode: MutableRefObject<HTMLElement | null>
) {
  // let limitHeight: number = 0;

  interact(id).resizable({
    edges: { top: false, left: false, bottom: true, right: true },
    listeners: {
      move: function (event: any) {
        let { x, y } = event.target.dataset;

        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        let limitHeight = limit(idCode).height;
        //   console.log(limitHeight,"here")

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          minHeight: `${limitHeight + 37}px`,
          transition: "none",
          transform: `translate(${x}px, ${y}px)`,
        });

        Object.assign(event.target.dataset, { x, y });
      },
    },
    inertia: true,
  });
}

function limit(element: any) {
  console.log(element.parentNode.clientHeight);
  let totalHeight = element.parentNode.clientHeight;

  return {
    height: totalHeight,
  };
}
