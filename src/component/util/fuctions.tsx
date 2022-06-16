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
      return {
        params: item.node.children[2].children,
        code: item.node.children[3],
      };
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
