// import { ChooseType } from "../ChooseType";

import {TypeComponentProps} from "../../../types/interface";

function JsxText(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return <span className="JsxText">{data.text}</span>;
}

export default JsxText;
