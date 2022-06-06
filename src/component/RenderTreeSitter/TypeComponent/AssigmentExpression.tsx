import ChooseType from "../ChooseType";

function AssigmentExpression(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="AssigmentExpression">
      {data.children.map((e: any) => {
        return <ChooseType info={e} />;
      })}
    </span>
  );
}

export default AssigmentExpression;
