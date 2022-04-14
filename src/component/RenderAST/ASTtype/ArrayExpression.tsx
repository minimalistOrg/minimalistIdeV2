import ChooseType from "../ChooseType";
import { Coma } from "./Coma";

function ArrayExpression(props: any): JSX.Element {
  const data = props.data;

  const lengthArray: number = data.elements.length;

  return (
    <>
      <span>[ </span>
      <span>
        {data.elements.map((element: any, index: number) => {
          return (
            <span key={index}>
              <span>
                <ChooseType info={element} />
              </span>
              <span>{Coma(index, lengthArray)}</span>
            </span>
          );
        })}
      </span>
      <span> ]</span>
    </>
  );
}

export default ArrayExpression;
