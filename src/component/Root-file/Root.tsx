import "./Root.css";
import "../RenderTreeSitter/highlight.css";
import Bubble from "../Bubble/Bubble";
import CallTree from "../CallTree/CallTree";
// import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import FuzzySearch from "../FuzzySearch/FuzzySearch";
import { test } from "../Tree-Sitter/TreeSitter";
import { useEffect, useState } from "react";
import { TreeCall as json } from "./CallTree";
import { useDispatch } from "react-redux";
import { add } from "../Root-file/slice/addBubbleSlice";

function Root(): JSX.Element {
  const dispatch = useDispatch();
  const [wait, setWait] = useState(false);

  useEffect(() => {
    const data = async () => {
      const loadData = await test();
      dispatch(add(loadData));
      setWait(true);
    };

    data();
    // console.log("test");
    //eslint-disable-next-line
  }, [wait]);

  function BubbleLoad(state: Boolean) {
    if (state) {
      return (
        <>
          <Bubble tree={json} />
          <div className="FuzzySearch-container">
            <FuzzySearch />
          </div>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  return (
    <div className="d-flex">
      <section>
        <CallTree data={json} />
      </section>
      <section className="code-area">
        {BubbleLoad(wait)}
        {/*<CodeBlockTS code={load} />*/}
      </section>
    </div>
  );
}

export default Root;
