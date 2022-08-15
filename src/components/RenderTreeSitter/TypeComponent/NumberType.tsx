import {TypeComponentProps} from "../../../types/interface";

function NumberType(props:TypeComponentProps){
  const data= props.data;
  // console.log(data)
  return <span className="NumberType">{data.text}</span>
}

export default NumberType;
