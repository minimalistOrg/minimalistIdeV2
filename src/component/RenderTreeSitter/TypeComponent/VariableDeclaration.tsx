import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import ChooseType from "../ChooseType";

function VariableDeclaration(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="VariableDeclaration">
      {data.children.map((e: TreesitterData, index: number) => {
        return (
          <span key={index}>
            <ChooseType info={e} />
          </span>
        );
      })}
    </span>
  );
}

export default VariableDeclaration;
