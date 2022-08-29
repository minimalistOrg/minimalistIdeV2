import { TypeComponentProps, TreesitterData } from "../../../types/interface";
import { ChooseType } from "../ChooseType"

function TypeAnnotation(props: TypeComponentProps) {
  const data = props.data;

  return (
    <span className="TypeAnnotation">
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

export default TypeAnnotation;
