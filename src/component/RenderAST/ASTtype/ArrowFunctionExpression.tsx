import ChooseType from "../ChooseType";
import { Coma } from "./Coma";

function ArrowFunctionExpression(props: any) {
  const data = props.data;
  // console.log(data);

  const lengthArray = data.params.length;

  return (
    <>
      <span>
        (
        <span>
          {data.params.map((e: any, index: number) => {
            return (
              <span key={index}>
                <ChooseType info={e} />
                {Coma(index, lengthArray)}
              </span>
            );
          })}
        </span>
        )
      </span>
      <span> {"=>"} </span>
      <ChooseType info={data.body} />
    </>
  );
}

export default ArrowFunctionExpression;
