import {TypeComponentProps} from "../../../types/interface";

function StringType(props:TypeComponentProps){
  const data= props.data;
  // console.log(data)
  return <span className="StringType">{data.text}</span>
}

export default StringType;
