import interact from "interactjs";

export default function Resize(id: any) {
  // console.log(id)
  interact(id).resizable({
    edges: { top: true, left: true, bottom: true, right: true },
    listeners: {
      move: function (event: any) {
        let { x, y } = event.target.dataset;

        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`,
        });

        Object.assign(event.target.dataset, { x, y });
      },
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: "parent",
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 162, height: 86 },
      }),
    ],

    inertia: true,
  });
}
