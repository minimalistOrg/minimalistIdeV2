import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import { ChooseType } from "../ChooseType";

function FormalParameters(props: TypeComponentProps & {type:string}) {
  const data = props.data;
  // console.log(data);

  return (
    <span className={props.type} >
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

export default FormalParameters;
