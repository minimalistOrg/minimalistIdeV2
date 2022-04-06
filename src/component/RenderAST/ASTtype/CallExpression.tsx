import ChooseType from "../ChooseType";

function CallExpression(props: any) {
  const data = props.data;
  // console.log(data);

  const long = data.arguments.length;

  function coma(actual: number) {
    if (long - 1 === actual) {
      return "";
    } else {
      return " , ";
    }
  }

  return (
    <span>
      <button className="ast-CallExpression">{data.callee.name}</button>
      <span>( </span>
      <span>
        {data.arguments.map((e: any, index: number) => {
          return (
            <span key={index}>
              <span>
                <ChooseType info={e} />
              </span>
              <span>{coma(index)}</span>
            </span>
          );
        })}
      </span>
      <span> )</span>
    </span>
  );
}

export default CallExpression;
