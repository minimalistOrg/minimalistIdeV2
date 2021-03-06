
import {TypeComponentProps,TreesitterData} from "../../../types/interface";
import ChooseType from "../ChooseType";

function ArrayPattern(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="UpdateExpression">
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

export default ArrayPattern;
