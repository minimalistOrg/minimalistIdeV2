import "./Root.css";
//import Bubble from "../Bubble/Bubble";
//import CallTree from "../CallTree/CallTree";
//import { TreeCall as json } from "./CallTree";
import CodeBlockTS from "../CodeBlock/CodeBlockTS"
import FuzzySearch from "../FuzzySearch/FuzzySearch";
import { test } from "../Tree-Sitter/TreeSitter";
import { useEffect, useState } from "react";

function Root(): JSX.Element {
  const [load, setLoad] = useState({});

  useEffect(() => {
    const data = async () => {
      const loadData = await test();
      setLoad(loadData.rootNode.children[0].children);
    };

    data();
  }, []);

  return (
    <div className="d-flex">
      <section>
        {/*
        <CallTree data={json} />
        */}
      </section>
      <section className="code-area">
        {/*
        <Bubble
          order={0}
          entryPoint={json}
          data={load}
          dataparams={[]}
          id={0}
        />
        */}
        <CodeBlockTS code={load} />
        <div className="FuzzySearch-container">
          <FuzzySearch />
        </div>
      </section>
    </div>
  );
}

export default Root;
