import {TypeComponentProps} from "../../../types/interface";

function ShorthandPropertyIdentifierPattern(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return <span className="TypeShorthandPropertyIdentifierPattern">{data.text}</span>;
}

export default ShorthandPropertyIdentifierPattern;
