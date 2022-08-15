
declare global {
  interface Window {
    TreeSitter?: {};
  }
}


const sourceCode= `let id:number= 12;`

export function getAstTsx(){

  const Parser: any = window?.TreeSitter;

  let data = Parser.init().then(() => {
    /* the library is ready */
    const parser = new Parser();
    const testing = async () => {
      const TypeScript = await Parser.Language.load(
        process.env.PUBLIC_URL +
          "/assets/TreeSitter/tree-sitter-tsx.wasm"
      );
      parser.setLanguage(TypeScript);
      // console.log(tree);
      const tree = parser.parse(sourceCode);
      console.log(tree);
      }
      testing()
  })
    console.log("TSX test")

    return data
}
