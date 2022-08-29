import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import { ChooseType } from "../ChooseType";

function StatementBlock(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return (
    <div className="StatementBlock">
      {data.children.map((e: TreesitterData, index: number) => {
        return (
          <div key={index} className="StatementBlock__line">
            <ChooseType info={e} />
          </div>
        );
      })}
    </div>
  );
}

export default StatementBlock;
