import interact from "interactjs"

interface Resize {
  target: HTMLElement
  deltaRect: { left: number; top: number }
  rect: { width: number; height: number }
}

export const resizeCodeBlock = (id: HTMLElement) => {
  interact(id).resizable({
    edges: { top: false, left: false, bottom: true, right: true },
    listeners: {
      move: function (event: Resize) {
        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          // minHeight: `${heightLimit + 37}px`,
          // transition: "none",
          // transform: `translate(${x}px, ${y}px)`,
        })
      },
    },
    inertia: true,
  })
}
