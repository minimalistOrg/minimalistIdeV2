//import { url } from "inspector";
import { CodeBlockCodeType, TreesitterData } from "../../types/interface";
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

export function urldata(params: string) {
  let detectRepoUrl = window.location;
  let getParamsUrl = detectRepoUrl.href.split("?");

  function getRepoUrl(params: string) {
    if (getParamsUrl.length > 1) {
      let repository = getParamsUrl[1].split(params + "=")[1];
      return repository;
    } else {
      return "";
    }
  }

  function setRepoUrl(newUrl: string) {
    let readurl = getRepoUrl(params);
    if (readurl === "") {
      let url = window.location;
      let urlrepo = url.href + `?${params}=${newUrl}`;
      window.history.pushState({}, "repo", urlrepo);
    } else {
      let readurl = getRepoUrl(params);
      let url = window.location;
      let newurl = url.href.replace(readurl, newUrl);
      window.history.pushState({}, "repo", newurl);
    }
  }

  return {
    setRepoUrl: setRepoUrl,
    repository: getRepoUrl(params),
  };
}

declare global {
  interface Window {
    UrlData: any;
  }
}

export function setDataURL(data: any) {
  let url = urlcreate(data).toString();
  url = btoa(url);
  if (url === "") {
    urldata("data").setRepoUrl(url);
    let global_url = window.location.href;
    let url_without_data = global_url.replace("?data=", "");
    window.history.pushState({}, "repo", url_without_data);
  } else {
    urldata("data").setRepoUrl(url);
  }
  // convertToObj(urldata("data").repository);
}

export function urlcreate(data: any) {
  // console.log(data,"test");
  if (data === []) {
    return "";
  } else {
    let url = data.map((e: any, index: number) => {
      return `{ "i":${e.index},"o":${e.order},"e":${
        e.event ? 1 : 0
      },"v":[${urlcreate(e.value)}],"b":"${e.id}"${
        e.ied === undefined ? "" : `,"l":"${e.ied}"`
      } }`;
    });

    return url;
  }
}

export function convertToObj(data: string) {
  let toString = atob(data);
  let obj = "[" + toString + "]";
  // console.log(obj);
  obj = JSON.parse(obj);

  let result = Rebuild(obj);

  console.log(result);
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
        let result = document.getElementById(
          "id" + e.l === undefined ? "" : e.l
        );
        return result;
      },
      Bubble: () => {
        let result = document.getElementById("id" + e.b);
        return result;
      },
    };
  });
}
