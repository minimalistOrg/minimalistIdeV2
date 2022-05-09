import ChooseType from "../ChooseType";

function LexicalDeclaration(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="LexicalDeclaration">
      <span>{data.children[0].text} </span>
      <span>
        <ChooseType info={data.children[1]} />
      </span>
    </span>
  );
}

export default LexicalDeclaration;
