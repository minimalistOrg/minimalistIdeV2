
import ChooseType from "../ChooseType";

function BreakStatementcase(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="BreakStatementcase">
      {data.children.map((e: any, index: number) => {
        return (
          <span key={index}>
            <ChooseType info={e} />
          </span>
        );
      })}
    </span>
  );
}

export default BreakStatementcase;
