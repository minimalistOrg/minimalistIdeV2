import ChooseType from "../ChooseType";
import { LogicalExpressionType } from "./interfaceType";

function LogicalExpression(props: {
  data: LogicalExpressionType;
}): JSX.Element {
  const data: object = props.data.left;
  const data2: object = props.data.right;

  return (
    <>
      <span>
        ( <ChooseType info={data} />
      </span>
      <span> {props.data.operator} </span>
      <span>
        <ChooseType info={data2} /> )
      </span>
    </>
  );
}

export default LogicalExpression;
