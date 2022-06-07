
import ChooseType from "../ChooseType";

function ForInStatement(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="ForInStatement">
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

export default ForInStatement;
