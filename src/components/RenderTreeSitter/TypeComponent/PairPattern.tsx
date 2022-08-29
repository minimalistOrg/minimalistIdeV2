import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import { ChooseType } from "../ChooseType";

function PairPattern(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="PairPattern">
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

export default PairPattern;
