import ChooseType from "../ChooseType";
import {MemberExpressionType} from "./interfaceType";

function MemberExpression(props:{data: MemberExpressionType}):JSX.Element{
  const data:MemberExpressionType= props.data;
  // console.log(data)
  return (
    <span>
      <span>
      <ChooseType info={data.object} />
      </span>
      <span>.</span>
      <span>
      <ChooseType info={data.property} />
      </span>
    </span>
  )
}

export default MemberExpression;
