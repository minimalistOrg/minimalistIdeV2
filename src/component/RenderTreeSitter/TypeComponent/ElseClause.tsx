import ChooseType from "../ChooseType";

function ElseClause(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="ElseClause">
      <span>
        <ChooseType info={data.children[0]} />
      </span>
      <span>{" {"}</span>

      <ChooseType info={data.children[1]} />
        <span>{"}"}</span>
    </span>
  );
}

export default ElseClause;
