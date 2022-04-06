import ChooseType from "../ChooseType";

function VariableDeclaration(props: any) {
  const data = props.data;
  // console.log(props.data);

  return (
    <>
      <span className="varType">{data.kind}</span>
      <span> </span>
      <span>{data.declarations[0].id.name}</span>
      <span> </span>
      <span>=</span>
      <span> </span>
      <span>
        <ChooseType info={data.declarations[0].init} />
      </span>
    </>
  );
}

export default VariableDeclaration;
