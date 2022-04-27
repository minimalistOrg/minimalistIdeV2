import "./Root.css";
import Bubble from "../Bubble/Bubble";
import { api } from "../../AST/data";
import CallTree from "../CallTree/CallTree";

function Root(): JSX.Element {
  const data = api.body;

  return (
    <div className="d-flex">
      <section>
        <CallTree />
      </section>
      <section>
        <Bubble order={0} entryPoint={0} data={data} dataparams={[]} />
      </section>
    </div>
  );
}

export default Root;
