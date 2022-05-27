import "./Root.css";
import "../RenderTreeSitter/highlight.css";
import Bubble from "../Bubble/Bubble";
import CallTree from "../CallTree/CallTree";
// import CodeBlockTS from "../CodeBlock/CodeBlockTS";
import FuzzySearch from "../FuzzySearch/FuzzySearch";
import { test } from "../Tree-Sitter/TreeSitter";
import { useEffect, useState } from "react";
import { TreeCall as json, resetTreeCall } from "./CallTree";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/addBubbleSlice";
import MenuHeader from "../MenuHeader/MenuHeader";
import LoadCode from "../MenuHeader/LoadCode/LoadCode";
import { code as testCode } from "../Tree-Sitter/TreeSitter";
import { add as callrender } from "../Root-file/slice/callTreeSlice";

function Root(): JSX.Element {
  const dispatch = useDispatch();
  const [wait, setWait] = useState(false);
  const reRender = useSelector((state: any) => state.callTree.value);

  const data = async (code: string, reset: any) => {
    if (reset.reset) {
      resetTreeCall();
      dispatch(callrender(!reRender));
      dispatch(add(""));
      const codedata = await test(code);
      dispatch(add(codedata));
      console.log("load", json, codedata);
    } else {
      const loadData = await test(testCode);
      dispatch(add(loadData));
      setWait(true);
    }
  };

  useEffect(() => {
    data("", { reset: false });
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
        <section className="MenuHeader-container">
          <MenuHeader />
        </section>
        <section className="BubbleArea">{BubbleLoad(wait)}</section>
        <LoadCode load={data} />
        {/*<CodeBlockTS code={load} />*/}
      </section>
    </div>
  );
}

export default Root;
