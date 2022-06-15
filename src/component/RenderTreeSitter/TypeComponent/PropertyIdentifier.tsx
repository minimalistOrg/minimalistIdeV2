// import ChooseType from "../ChooseType";

import {TypeComponentProps} from "../../../types/interface";

function PropertyIdentifier(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return <span className="PropertyIdentifier">{data.text}</span>;
}

export default PropertyIdentifier;
