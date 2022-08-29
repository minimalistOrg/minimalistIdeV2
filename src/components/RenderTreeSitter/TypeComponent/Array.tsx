import { ChooseType } from "../ChooseType";
import { TreesitterData, TypeComponentProps } from "../../../types/interface";

function Array(props: TypeComponentProps): JSX.Element {
  const data: TreesitterData = props.data;
  // console.log(data);

  return (
    <span className="Array">
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

export default Array;
