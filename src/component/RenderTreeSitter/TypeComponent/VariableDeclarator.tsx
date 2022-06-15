import {TypeComponentProps} from "../../../types/interface";
import ChooseType from "../ChooseType";

function VariableDeclarator(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="VariableDeclarator">
      <span>
        <ChooseType info={data.children[0]} />
      </span>
      <span> = </span>
      <span>
        <ChooseType info={data.children[2]} />
      </span>
    </span>
  );
}

export default VariableDeclarator;
