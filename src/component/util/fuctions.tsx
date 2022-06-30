//import { url } from "inspector";
import { CodeBlockCodeType, ObjTree, TreesitterData, stacktraceType } from "../../types/interface";
import { setTreeCall } from "../Root-file/CallTree";
import EasyUrlParams from "./EasyUrlParams";
//import { useSelector } from "react-redux";

export function checkFunctionType(item: CodeBlockCodeType): {
  params: TreesitterData[];
  code?: TreesitterData;
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
    UrlData: ()=> ObjTree[];
  }
}

export function setDataURL(data: ObjTree[]) {
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

export function urlcreate(data: ObjTree[]):string[]{
  if (data === []) {
    return [];
  } else {
    const url = data.map((e: ObjTree, index: number) => {
      return `{"i":${e.index},"v":[${urlcreate(e.value)}]}`;
    });

    return url;
  }
}

interface miniObjTree{
i:string;
v:miniObjTree[]
}

export function convertToObj(data: string):miniObjTree[] {
  const toString = atob(data);
  const obj = "[" + toString + "]";
  const objparse = JSON.parse(obj);
  const result = Rebuild(objparse);

  return result;
}

export function Rebuild(data: miniObjTree[]):any {
  return data.map((e: miniObjTree) => {
    return {
      id: "hashxd" + e.i,
      ied: "",
      index: e.i,
      order: 0,
      event: false,
      value: Rebuild(e.v),
      visibility: true,
      name: "",
      params: [{ text: "(" }, { text: ")" }],
      element: () => {
        const result = document.getElementById("id");
        return result;
      },
      Bubble: () => {
        const result = document.getElementById("idhashxd" + e.i);
        return result;
      },
    };
  });
}

export function userdata() {
  const getdataurl = new EasyUrlParams("data");
  if (getdataurl.get()?.value === undefined) {
    // console.log(getdataurl.repository)
    return false;
  } else {
    const obj = convertToObj(getdataurl.get()?.value as string);
    // console.log(obj,"here")
    setTreeCall(obj);
    return true;
  }
}

export function startParams(list: CodeBlockCodeType[]) {
  const stacktraceData= new EasyUrlParams("stacktrace");
  if (stacktraceData.get() !== undefined) {
    stacktrace(stacktraceData, list);
  }
}



function stacktrace(data: EasyUrlParams, fn: CodeBlockCodeType[]) {
  let value = data.get()?.value as string;
  value = value.replace(/\[|\]/g, "");
  const list = value.split(",");
  let listObj = list.map((e: string):stacktraceType => {
    const parts = e.split(":");
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

    let result = fn.filter((e: CodeBlockCodeType) => {
      const start = e.node.startPosition;
      const end = e.node.endPosition;
      const data = listObj.reverse();
      // console.log(start, end, data);
      let r:stacktraceType[] = data.filter((e: stacktraceType) => {
        const valid =
          parseInt(e.row) >= start.row + 1 && parseInt(e.row) <= end.row + 1;
          if(!valid){
            console.warn(`stacktrace error ${e.file}:${e.row}:${e.colum}`)
          }
        // console.log(valid)
        return valid;
      });
      let row: string|number = r.length;
      if (row > 0) {
        row = r[0].row;
        st= true
      }
      return parseInt(row as string) >= start.row + 1 && parseInt(row as string) <= end.row + 1;
    });
    // console.log(result, "out");
    buildObj(result,st);
  }
}

function buildObj(data: CodeBlockCodeType[],st:boolean) {
  const fn:CodeBlockCodeType[] = data;

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
    (acc: CodeBlockCodeType[], curr: CodeBlockCodeType, index: number):any => [
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
          const result = document.getElementById("id");
          return result;
        },
        Bubble: () => {
          const result = document.getElementById("idx" + index.toString());
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
