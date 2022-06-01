import "./FuzzySearch.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from "react";
import { TreeCall } from "../Root-file/CallTree";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Root-file/slice/callTreeSlice";
import { v4 as uuidv4 } from "uuid";

function FuzzySearch(): JSX.Element {
  const listFn = useSelector((state: any) => state.addbubble.value);
  const [li, setLi] = useState<[{ name: string }]>([{ name: "Loading..." }]);

  const dispatch = useDispatch();
  const reRender = useSelector((state: any) => state.callTree.value);

  useEffect(() => {
    setLi(listFn);
  }, [listFn]);

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  };

  const handleOnHover = (result: any) => {
    // the item hovered
    // console.log(result)
  };

  const handleOnSelect = (item: any) => {
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
    function checkFunctionType(item: any) {
      if (item.node.type === "function_declaration") {
        return { params: item.node.children[2].children };
      }
      if (item.node.type === "lexical_declaration") {
        return {
          params: item.node.children[1].children[2].children[0].children,
        };
      }
    }
    const gId = uuidv4();
    //
    TreeCall.push({
      id: gId, //item.node.id
      name: item.name,
      params: checkFunctionType(item)?.params,
      index: item.id,
      value: [],
      event: false,
      order: 0,
      element: null,
      Bubble: () => {
        let result = document.getElementById("id" + gId);
        return result;
      },
      visibility: true,
    });
    // console.log(item,TreeCall)
    dispatch(add(!reRender));
    //
    // the item selected
  };

  const handleOnFocus = () => {
    // console.log('Focused')
  };

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          fn: {item.name} <br/>
          <span>/{item.from}</span>
        </span>
      </>
    );
  };

  return (
    <div className="FuzzySearch__input">
      <ReactSearchAutocomplete
        placeholder="Search functions by name"
        items={li}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        resultStringKeyName={"nothing"}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        styling={{
          backgroundColor: "inherit",
          height: "30px",
          borderRadius: "inherit",
          boxShadow: "none",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}

export default FuzzySearch;
