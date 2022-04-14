import ChooseType from "../ChooseType";
import { Coma } from "./Coma";

function ObjectExpression(props: { data: { properties: [] } }):JSX.Element {
  const data: { properties: [] } = props.data;
  // console.log(data);

  const open:string = "{ ";
  const close:string = " }";
  const long:number = data.properties.length;

  return (
    <>
      <span>{open}</span>
      <span>
        {data.properties.map((e:{key:{name:string},value: object}, index: number) => {
          return (
            <span key={index}>
              <span>{e.key.name}:</span>
              <span>
                {" "}
                <ChooseType info={e.value} />
              </span>
              <span>{Coma(index, long)}</span>
            </span>
          );
        })}
      </span>
      <span>{close}</span>
    </>
  );
}

export default ObjectExpression;
