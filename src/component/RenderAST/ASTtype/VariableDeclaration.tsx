import ChooseType from "../ChooseType";
import {VariableDeclarationType} from "./interfaceType"

function VariableDeclaration(props:{data: VariableDeclarationType}):JSX.Element {
  const data: VariableDeclarationType = props.data;
  // console.log(props.data);

  return (
    <>
      <span className="ast-variable-type">{data.kind}</span>
      <span> </span>
      <span className="ast-variable-name">{data.declarations[0].id.name}</span>
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
