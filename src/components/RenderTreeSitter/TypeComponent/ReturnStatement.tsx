import {TypeComponentProps} from "../../../types/interface";
import { ChooseType } from "../ChooseType";

function ReturnStatement(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);
  return (
    <>
      <span className="ReturnStatement__text">return </span>
      <span>
        <ChooseType info={data.children[1]} />
      </span>
    </>
  );
}
export default ReturnStatement;
