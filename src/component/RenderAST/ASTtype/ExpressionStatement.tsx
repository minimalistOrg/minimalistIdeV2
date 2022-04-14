import ChooseType from "../ChooseType";

function ExpressionStatement(props: { data: { expression: object } }): JSX.Element {
  const data: { expression: object } = props.data;

  return (
    <span>
      <ChooseType info={data.expression} />
    </span>
  );
}

export default ExpressionStatement;
