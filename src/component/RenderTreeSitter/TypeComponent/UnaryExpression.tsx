import ChooseType from "../ChooseType";

function UnaryExpression(props: any) {
  const data = props.data;
  console.log(data);

  return (
    <span>
      {data.children.map((e: any) => {
        return <ChooseType info={e} />;
      })}
    </span>
  );
}

export default UnaryExpression;
