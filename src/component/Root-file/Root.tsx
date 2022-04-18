import "./Root.css";
import Bubble from "../Bubble/Bubble"
import {api} from "../../AST/data"

function Root(): JSX.Element {

const data= api.body

  return (
    <div>
      <Bubble order={0} entryPoint={0} data={data} />
    </div>
  );
}

export default Root;
