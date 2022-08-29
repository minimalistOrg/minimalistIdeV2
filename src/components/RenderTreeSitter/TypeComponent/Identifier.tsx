import { TypeComponentProps } from "../../../types/interface"
import { useOpenDefinition } from "../../../hooks/useOpenDefinition"
import { useHoverIdentifierToBubble } from "../../../hooks/useHoverIdentifierToBubble"

export const Identifier = ({ data, type }: TypeComponentProps & { type: string }) => {
  const { text } = data
  const element = useOpenDefinition(text, {
    tag: ["JsxSelfClosingElement", "JsxOpeningElement"],
  })
  const { inside, outside } = useHoverIdentifierToBubble()

  return (
    <span
      onMouseOver={inside}
      onMouseLeave={outside}
      ref={element}
      data-identifier={text}
      className={type}
    >
      {text}
    </span>
  )
}
