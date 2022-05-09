import ChooseType from "../ChooseType";

function CallExpression(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="CallExpression">
      <ChooseType info={data.children[0]} />
      <span>
        (<ChooseType info={data.children[1]} />)
      </span>
    </span>
  );
}

export default CallExpression;
