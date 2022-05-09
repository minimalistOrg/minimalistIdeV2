declare global {
  interface Window {
    TreeSitter?: any;
  }
}

export const code= `
  function main(){
    console.log("Hello Word")
  }

`

export function test() {

  const Parser:any = window?.TreeSitter;

  Parser.init().then(() => {
    /* the library is ready */
    const parser = new Parser();
    const test = async () => {
      const JavaScript = await Parser.Language.load(
        process.env.PUBLIC_URL +
          "/assets/TreeSitter/tree-sitter-javascript.wasm"
      );
      parser.setLanguage(JavaScript);
      const sourceCode = code;
      const tree = parser.parse(sourceCode);
      console.log(tree.rootNode.toString());
    };
    test();
  });
}
