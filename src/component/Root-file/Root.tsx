import "./Root.css";
import "../RenderTreeSitter/highlight.css"
import Bubble from "../Bubble/Bubble";
import CallTree from "../CallTree/CallTree";
import CodeBlockTS from "../CodeBlock/CodeBlockTS"
import FuzzySearch from "../FuzzySearch/FuzzySearch";
import { test } from "../Tree-Sitter/TreeSitter";
import { useEffect, useState } from "react";
import { TreeCall as json } from "./CallTree";
import {useDispatch} from "react-redux"
import {add} from "../Root-file/slice/addBubbleSlice"

function Root(): JSX.Element {
  const [load, setLoad] = useState({});
const dispatch= useDispatch()

  useEffect(() => {
    const data = async () => {
      const loadData = await test();
      console.log(loadData[0].node.children)
      setLoad(loadData[0].node.children);
      dispatch(add(loadData))

    };

    data();
    // console.log(json)
  }, []);

  return (
    <div className="d-flex">
      <section>
        <CallTree data={json} />
      </section>
      <section className="code-area">
        <Bubble
          data={load}
          tree={json}
        />
      {/*<CodeBlockTS code={load} />*/}
        <div className="FuzzySearch-container">
          <FuzzySearch />
        </div>
      </section>
    </div>
  );
}

export default Root;
