import {TypeComponentProps} from "../../../types/interface";

function Identifier(props: TypeComponentProps & {type:string}) {
  const data = props.data;
  // console.log(data)

  return <span data-identifier={data.text} className={props.type}>{data.text}</span>;
}

export default Identifier;
