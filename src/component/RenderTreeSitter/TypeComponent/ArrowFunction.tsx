import {TypeComponentProps} from "../../../types/interface";
import ChooseType from "../ChooseType";

function ArrowFunction(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);
  function checkBlock() {
    // console.log(data.children[2].type)
    if ("statement_block" === data.children[2].type) {
      return (
        <>
          <span>{"{"}</span>
          <span>
            <ChooseType info={data.children[2]} />
          </span>
          <span>{"}"}</span>
        </>
      );
    } else {
      return (
        <span>
          <ChooseType info={data.children[2]} />
        </span>
      );
    }
  }


  return (
    <span className="ArrowFunction">
      <span>
        <ChooseType info={data.children[0]} />
      </span>
      <span>
        <ChooseType info={data.children[1]} />
      </span>
      {checkBlock()}
    </span>
  );
}

export default ArrowFunction;
