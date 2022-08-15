import {TypeComponentProps} from "../../../types/interface";
import ChooseType from "../ChooseType";

function ExpressionStatement(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data)

  return <ChooseType info={data.children[0]} />;
}

export default ExpressionStatement;
