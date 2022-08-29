import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import { ChooseType } from "../ChooseType";

function SwitchCase(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return (
    <div className="SwitchCase">
      {data.children.map((e: TreesitterData, index: number) => {
        return (
          <span key={index}>
            <ChooseType info={e} />
          </span>
        );
      })}
    </div>
  );
}

export default SwitchCase;
