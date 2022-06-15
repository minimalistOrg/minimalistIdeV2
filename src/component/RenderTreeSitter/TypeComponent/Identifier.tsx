import {TypeComponentProps} from "../../../types/interface";

function Identifier(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data)

  return <span data-identifier={data.text} className="Identifier">{data.text}</span>;
}

export default Identifier;
