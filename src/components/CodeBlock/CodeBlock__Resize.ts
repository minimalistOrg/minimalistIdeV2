import interact from "interactjs";

interface resizeType {
  target: HTMLElement;
  deltaRect: { left: number; top: number };
  rect: { width: number; height: number };
}

function Resize(id: HTMLElement, idCode: HTMLElement) {
  // let limitHeight: number = 0;

  interact(id).resizable({
    edges: { top: false, left: false, bottom: true, right: true },
    listeners: {
      move: function (event: resizeType) {
        // console.log(event);
        let { x, y } = event.target.dataset;

        x = ((parseFloat(x as string) || 0) + event.deltaRect.left).toString();
        y = ((parseFloat(y as string) || 0) + event.deltaRect.top).toString();

        let limitHeight = limit(idCode).height;
        // console.log("here")

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

function limit(element: HTMLElement): { height: number } {
  // console.log(element.parentNode.clientHeight);
  let totalHeight: number = (element.parentNode as HTMLElement).clientHeight;

  return {
    height: totalHeight,
  };
}

export default Resize;
