import ChooseType from "../ChooseType";

function IfStatement(props: any) {
  const data = props.data;
  // console.log(data);
  //
  function checkelse() {
    if (data.children.length > 3) {
      return (
        <span>
          {" "}
          <ChooseType info={data.children[3]} />{" "}
        </span>
      );
    }
  }

  return (
    <span className="IfStatement">
      <span>
        <ChooseType info={data.children[0]} />
      </span>
      <span>
        {" "}
        <ChooseType info={data.children[1]} />{" "}
      </span>
      <span>{"{"}</span>
      <ChooseType info={data.children[2]} />
      <span>{"}"}</span>
      {checkelse()}
    </span>
  );
}

export default IfStatement;
