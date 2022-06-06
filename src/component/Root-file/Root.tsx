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
  const [placeholderinput,setPlaceholderinput]= useState("Search functions by name")

  const data = async (code: string, reset: any, from: string) => {
    if (reset.reset) {
      // resetTreeCall();
      // dispatch(callrender(!reRender));
      // dispatch(add(""));
      // const codedata = await test(code,from);
      // //
      // //
      // console.log(codedata)
      // // dispatch(add(codedata));
      // console.log("load", json, codedata);
    } else {
      const loadData = await test(testCode, "Placeholder");
      console.log(loadData,testCode)
      dispatch(add(loadData));
      setWait(true);
    }
  };

  async function setGistCode(data: any) {
  // console.log(data)
    setPlaceholderinput("Loading data...")
    resetTreeCall();
    dispatch(callrender(!reRender));
    dispatch(add(""));
    async function getCodeParse(e: any) {
      let response = await test(e.content, e.filename);
      let result = await response;
      return result;
    }
    let allfn: any = await Promise.all(
      data.map(async (e: any) => {
        let x = await getCodeParse(e);
        return x;
      })
    );

    let result = [].concat.apply([], allfn);
    result.forEach((e: any, index: number) => {
      e.id = index;
    });
    console.log(result)
    dispatch(add(result));
    setPlaceholderinput("Search functions by name")

    // console.log(result);
  }

  function setDataCode(data:any){
    setPlaceholderinput("Loading data...")
    resetTreeCall();
    dispatch(callrender(!reRender));
    dispatch(add(""));
    dispatch(add(data))
  }

  useEffect(() => {
    data("", { reset: false }, "Placeholder");
    // console.log("test");
    //eslint-disable-next-line
  }, [wait]);

  function BubbleLoad(state: Boolean) {
    if (state) {
      return (
        <>
          <Bubble tree={json} />
          <div className="FuzzySearch-container">
            <FuzzySearch placeholder={placeholderinput} />
          </div>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  const [opengist, setOpengist] = useState(true);
  function OpenModalGist() {
    setOpengist(!opengist);
  }
  const fnlist = { gist: OpenModalGist };

  return (
    <div className="d-flex">
      <section>
        <CallTree data={json} />
      </section>
      <section className="code-area">
        <section className="MenuHeader-container">
          <MenuHeader fn={fnlist} />
        </section>
        <section className="BubbleArea">{BubbleLoad(wait)}</section>
        <LoadCode load={setGistCode} setData={setDataCode} isOpen={opengist} event={fnlist} />
        {/*<CodeBlockTS code={load} />*/}
      </section>
    </div>
  );
}

export default Root;
