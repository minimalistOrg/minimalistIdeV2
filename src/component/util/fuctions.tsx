import { CodeBlockCodeType, TreesitterData } from "../../types/interface";
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
      // console.log(item.node.children.length, "test");
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
      const pathTsx: TreesitterData[] =
        item.node.children[1].children[3].children[0].children;
      return {
        params: pathTsx,
        code: item.node.children[1].children[3].children[2],
      };
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

export function urldata() {
  let detectRepoUrl = window.location;
  let getParamsUrl = detectRepoUrl.href.split("?");

  function getRepoUrl() {
    if (getParamsUrl.length > 1) {
      let repository = getParamsUrl[1].split("repository=")[1];
      return repository;
    } else {
      return "";
    }
  }

  function setRepoUrl(newUrl: string) {
    let readurl = getRepoUrl();
    if (readurl === "") {
      let url = window.location;
      let urlrepo = url.href + `?repository=${newUrl}`;
      window.history.pushState({}, "repo", urlrepo);
    } else {
      let readurl = getRepoUrl();
      let url = window.location;
      let newurl = url.href.replace(readurl, newUrl);
      window.history.pushState({}, "repo", newurl);
    }
  }

  return {
    setRepoUrl: setRepoUrl,
    repository: getRepoUrl(),
  };
}
