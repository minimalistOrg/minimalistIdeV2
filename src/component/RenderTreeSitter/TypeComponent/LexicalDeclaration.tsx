import ChooseType from "../ChooseType";

function LexicalDeclaration(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="LexicalDeclaration">
      <span className="LexicalDeclaration__variableType">
        {data.children[0].text}{" "}
      </span>
      <span className="LexicalDeclaration__variableName">
        <ChooseType info={data.children[1]} />
      </span>
    </span>
  );
}

export default LexicalDeclaration;
