//import { url } from "inspector";
import { CodeBlockCodeType, TreesitterData } from "../../types/interface";
import { setTreeCall } from "../Root-file/CallTree";
import EasyUrlParams from "./EasyUrlParams";
//import { useSelector } from "react-redux";

export function checkFunctionType(item: CodeBlockCodeType): {
  params: TreesitterData[];
  code?: any;
} {
  if (item.node.type === "function_declaration") {
    if (item.language === "JavaScript") {
      return {
        params: item.node.children[2].children,
        code: item.node.children[3],
      };
    } else {
      if (item.node.children.length > 4) {
        return {
          params: item.node.children[2].children,
          code: item.node.children[4],
        };
      } else {
        return {
          params: item.node.children[2].children,
          code: item.node.children[3],
        };
      }
    }
  }
  if (item.node.type === "lexical_declaration") {
    if (item.language === "TypeScript") {
      if (item.node.children[1].children[2].children.length > 3) {
        const pathJavascript: TreesitterData[] =
          item.node.children[1].children[2].children[0].children;
        return {
          params: pathJavascript,
          code: item.node.children[1].children[2].children[3],
        };
      } else {
        const pathJavascript: TreesitterData[] =
          item.node.children[1].children[2].children[0].children;
        return {
          params: pathJavascript,
          code: item.node.children[1].children[2].children[2],
        };
      }
    } else {
      const pathJavascript: TreesitterData[] =
        item.node.children[1].children[2].children[0].children;
      return {
        params: pathJavascript,
        code: item.node.children[1].children[2].children[2],
      };
    }
  }
  return { params: [] };
}

export function urlvalid(url: string): boolean {
  const regex = /(https:\/\/gist.github.com\/[\w\d-_]+\/[\w\d\-_]+\/?)/;
  const regex_git_branch =
    /(https:\/\/github.com\/)([\w\d\-_]+)(\/)([\w\d\-_]+)(\/)tree\/([\w\d\-_]+)\/?/;
  const regex_git = /https:\/\/github.com\/([\w\d\-_]+)\/([\w\d\-_]+)\/?/;
  const evaluation = regex.test(url);
  const evaluation2 = regex_git_branch.test(url);
  const evaluation3 = regex_git.test(url);
  return evaluation || evaluation2 || evaluation3;
}

declare global {
  interface Window {
    UrlData: any;
  }
}

export function setDataURL(data: any) {
  // console.log(data)
  let url = urlcreate(data).toString();
  url = btoa(url);
  let dataParam = new EasyUrlParams("data");
  if (url === "") {
    dataParam.remove();
  } else {
    dataParam.set(url);
  }
  // convertToObj(urldata("data").repository);
}

export function urlcreate(data: any) {
  if (data === []) {
    return "";
  } else {
    let url = data.map((e: any, index: number) => {
      return `{ "i":${e.index},"o":${e.order},"e":${
        e.event ? 1 : 0
      },"v":[${urlcreate(e.value)}],"b":"${e.id}" }`;
    });

    return url;
  }
}

export function convertToObj(data: string) {
  let toString = atob(data);
  let obj = "[" + toString + "]";
  obj = JSON.parse(obj);

  let result = Rebuild(obj);

  return result;
}

export function Rebuild(data: any) {
  return data.map((e: any) => {
    return {
      id: e.b,
      ied: e.l === undefined ? "" : e.l,
      index: e.i,
      order: e.o,
      event: e.e ? true : false,
      value: Rebuild(e.v),
      visibility: true,
      name: "",
      params: [{ text: "(" }, { text: ")" }],
      element: () => {
        let result = document.getElementById("id" + e.l);
        return result;
      },
      Bubble: () => {
        let result = document.getElementById("id" + e.b);
        return result;
      },
    };
  });
}

export function userdata() {
  let getdataurl = new EasyUrlParams("data");
  if (getdataurl.get()?.value === undefined) {
    // console.log(getdataurl.repository)
    return false;
  } else {
    let obj = convertToObj(getdataurl.get()?.value as string);
    // console.log(obj,"here")
    setTreeCall(obj);
    return true;
  }
}

export function startParams(list: CodeBlockCodeType[]) {
  let stacktraceData = new EasyUrlParams("stacktrace");
  if (stacktraceData.get() !== undefined) {
    stacktrace(stacktraceData, list);
  }
}

function stacktrace(data: any, fn: CodeBlockCodeType[]) {
  let value = data.get().value;
  value = value.replace(/\[|\]/g, "");
  let list = value.split(",");
  let listObj = list.map((e: string) => {
    let parts = e.split(":");
    return {
      file: parts[0],
      row: parts[1],
      colum: parts.length > 2 ? parts[2] : "",
    };
  });
  // console.log(listObj.reverse(),fn);
  // console.log(fn)
  let st= false
  if (fn.length > 0) {
    // console.log(fn, listObj.reverse());

    let result = fn.filter((e: any) => {
      let start = e.node.startPosition;
      let end = e.node.endPosition;
      let data = listObj.reverse();
      // console.log(start, end, data);
      let r = data.filter((e: any) => {
        let valid =
          parseInt(e.row) >= start.row + 1 && parseInt(e.row) <= end.row + 1;
          if(!valid){
            console.warn(`stacktrace error ${e.file}:${e.row}:${e.colum}`)
          }
        // console.log(valid)
        return valid;
      });
      let row = r.length;
      if (row > 0) {
        row = r[0].row;
        st= true
      }
      return parseInt(row) >= start.row + 1 && parseInt(row) <= end.row + 1;
    });
    // console.log(result, "out");
    buildObj(result,st);
  }
}

function buildObj(data: CodeBlockCodeType[],st:boolean) {
  const fn: any = data;

  //     id: e.b,
  //     ied: e.l === undefined ? "" : e.l,
  //     index: e.i,
  //     order: e.o,
  //     event: e.e ? true : false,
  //     value: Rebuild(e.v),
  //     visibility: true,
  //     name: "",
  //     params: [{ text: "(" }, { text: ")" }],
  //     element: () => {
  //       let result = document.getElementById("id" + e.l);
  //       return result;
  //     },
  //     Bubble: () => {
  //       let result = document.getElementById("id" + e.b);
  //       return result;
  //     },
  //   };
  // });
  //
  const nested = fn.reduceRight(
    (acc: any, curr: any, index: number) => [
      {
        id: "x" + index,
        index: index,
        ied: "",
        order: 0,
        event: false,
        params: [{ text: "(" }, { text: ")" }],
        name: curr.name,
        value: acc,
        visibility: true,
        element: () => {
          let result = document.getElementById("id");
          return result;
        },
        Bubble: () => {
          let result = document.getElementById("idx" + index.toString());
          return result;
        },
      },
    ],
    []
  );

  // console.log(nested);
  setTreeCall(nested);
  return st;
}
