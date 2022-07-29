import style from "./FuzzySearch.module.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from "react";
import { TreeCall } from "../Root-file/CallTree";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";
import { v4 as uuidv4 } from "uuid";
import {
  ObjTree,
  CodeBlockType,
  CodeBlockCodeType,
} from "../../types/interface";
import { checkFunctionType, setDataURL } from "../util/fuctions";
import JavaScriptIcon from "../../Icons/LanguageIcons/JavaScriptIcon";
import TypeScriptIcon from "../../Icons/LanguageIcons/TypeScriptIcon";

function FuzzySearch(props: { placeholder: string }): JSX.Element {
  const listFn: ObjTree[] = useSelector(
    (state: { addbubble: { value: ObjTree[] } }) => state.addbubble.value
  );
  const [li, setLi] = useState([{ name: "Loading..." }]);

  const dispatch = useDispatch();
  const reRender = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  );

  useEffect(() => {
    setLi(listFn);
  }, [listFn]);

  const handleOnSearch = (string: string, results: CodeBlockType) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
  };

  const handleOnHover = (result: CodeBlockType) => {
    // the item hovered
    // console.log(result)
  };

  const handleOnSelect = (item: CodeBlockCodeType) => {
    // {
    //   id: 0,
    //   name: "main",
    //   params: [{text:"("},{text:")"}],
    //   index: 0,
    //   value: [],
    //   event: false,
    //   order: 0,
    //   element: null,
    //   Bubble: () => {
    //     let result = document.getElementById("id" + 0);
    //     return result;
    //   },
    // },
    const gId = uuidv4();
    const eId = uuidv4();
    // console.log(eId)
    //
    TreeCall.push({
      id: gId, //item.node.id
      name: item.name,
      params: checkFunctionType(item)?.params,
      index: item.id,
      value: [],
      event: false,
      order: 0,
      element: () => {
        let result = document.getElementById("id" + eId);
        return result;
      },
      Bubble: () => {
        let result = document.getElementById("id" + gId);
        return result;
      },
      visibility: true,
    });
    dispatch(add(!reRender));
    setDataURL(window.UrlData());
    //
    // the item selected
  };

  const handleOnFocus = () => {};

  const formatResult = (item: {
    name: string;
    from: string;
    language: string;
  }) => {
    return (
      <>
        <span className={style.item}>
          <span className={style.icon}>
            {item.language === "JavaScript" && (
              <JavaScriptIcon width={16} height={16} />
            )}
            {item.language === "TypeScript" && (
              <TypeScriptIcon width={16} height={16} />
            )}
          </span>
          <span>{item.name}</span>
          <span className={style.file}>/{item.from}</span>
        </span>
      </>
    );
  };

  return (
    <div className={style.input}>
      <ReactSearchAutocomplete
        placeholder={props.placeholder}
        items={li as any} //important
        onSearch={handleOnSearch as () => void}
        onHover={handleOnHover as () => void}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        formatResult={formatResult}
        showIcon={false}
        showClear={false}
        fuseOptions={{keys:["name","from"]}}
        resultStringKeyName={"nothing"}
        styling={{
          borderRadius: "none",
          fontSize: "13px",
          height: "17px",
          boxShadow: "none",
          fontFamily: "inherit",
          hoverBackgroundColor: "var(--bg-hover)",
        }}
      />
    </div>
  );
}

export default FuzzySearch;
