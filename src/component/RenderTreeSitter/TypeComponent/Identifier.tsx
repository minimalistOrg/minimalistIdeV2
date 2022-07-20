import { TypeComponentProps } from "../../../types/interface";
import { useOpenDefinition } from "../../../hooks/useOpenDefinition";
import { useHoverIdentifierToBubble } from "../../../hooks/useHoverIdentifierToBubble";

function Identifier(props: TypeComponentProps & { type: string }) {
  const data = props.data;
  const element = useOpenDefinition(data.text, {
    tag: ["JsxSelfClosingElement","JsxOpeningElement"],
  });
  const hover = useHoverIdentifierToBubble();

  return (
    <span
      onMouseOver={hover.inside}
      onMouseLeave={hover.outside}
      ref={element}
      data-identifier={data.text}
      className={props.type}
    >
      {data.text}
    </span>
  );
}

export default Identifier;
