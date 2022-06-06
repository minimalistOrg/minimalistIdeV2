import ChooseType from "../ChooseType";

function UnaryExpression(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span>
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

export default UnaryExpression;