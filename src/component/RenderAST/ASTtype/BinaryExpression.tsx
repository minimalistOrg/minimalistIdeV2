import ChooseType from "../ChooseType";
import { BinaryExpressionType, DataBubble } from "./interfaceType";

function BinaryExpression(props: BinaryExpressionType): JSX.Element {
  const data: DataBubble = props.data.left;
  const data2: DataBubble = props.data.right;

  return (
    <>
      <span>
        <ChooseType info={data} />
      </span>
      <span> {props.data.operator} </span>
      <span>
        <ChooseType info={data2} />
      </span>
    </>
  );
}

export default BinaryExpression;
