import RenderAST from "../RenderAST";

function BlockStatement(props: any) {
  const data = props.data;
  // console.log(data)
  return (
    <>
      <span>{"{"}</span>
      <div>
        <RenderAST ast={data.body} />
      </div>
      <span>{"}"}</span>
    </>
  );
}

export default BlockStatement;
