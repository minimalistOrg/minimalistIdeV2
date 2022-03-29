import interact from "interactjs";

export default function Resize(id: any, idCode: any) {
  let limitHeight = 0;
  // console.log(id)
  interact(id).resizable({
    edges: { top: false, left: false, bottom: true, right: true },
    listeners: {
      move: function (event: any) {
        let { x, y } = event.target.dataset;

        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        limitHeight = limit(idCode, id).min();
        id.style = `min-height: ${limitHeight}px`;

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`,
        });

        Object.assign(event.target.dataset, { x, y });
      },
    },
    modifiers: [
      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 0, height: 0 },
      }),
    ],
    inertia: true,
  });
}

function limit(d: any, id: any) {
  // let W = d.current.offsetWidth;
  let H = d.current.offsetHeight + 34;

  // let BW = id.offsetWidth;
  let BH = id.offsetHeight;

  // console.log(W, H);
  // console.log(BW, BH);
  return {
    min: function () {
      if (BH <= H) {
        return H;
      } else {
        return 0;
      }
    },
  };
}
