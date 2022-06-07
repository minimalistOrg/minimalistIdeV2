
import ChooseType from "../ChooseType";

function JsxElement(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <span className="JsxElement">
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

export default JsxElement;
