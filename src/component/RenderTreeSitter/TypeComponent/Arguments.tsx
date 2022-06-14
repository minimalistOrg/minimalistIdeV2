import ChooseType from "../ChooseType";
import {TreesitterData,TypeComponentProps} from "../../../types/interface"

function Arguments(props: TypeComponentProps):JSX.Element {
  const data: TreesitterData = props.data;
  // console.log(data.children);

  return (
    <span className="Arguments">
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

export default Arguments;
