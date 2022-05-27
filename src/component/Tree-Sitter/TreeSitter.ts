declare global {
  interface Window {
    TreeSitter?: any;
  }
}

export const code = `
function main() {
  const n1 = 12;
  const n2 = 22;
  console.log(n1 + n2);
  logic(n1, n2);
  let operation_one = multiplication(n1, n2);
  let operation_two = division(n2, n1);
  show(operation_one);
  show(operation_two);
  recursion("something");
  fnArrow();
  fnArrowTwo();
  printOne("hi", 8);
}
main();
const printOne = (txt, num) => {
  console.log(1, txt, num);
};
function recursion(data) {
  let txt = "something";
  if (txt === data) {
    return "stop";
  } else {
    show("To infinity");
    main();
  }
}
function logic(data1, data2) {
  const result = data1 < data2;
  if (result) {
    sum(data1, data2);
  } else {
    subtraction(data1, data2);
  }


  if (result) {
    sum(data1 + 2, data2 + 2);
  }

}
function sum(a, b) {
  const result = a + b;
  show(result);
  return result;
}
function subtraction(a, b) {
  const result = a - b;
  show(result);
  return result;
}
function multiplication(a, b) {
  const result = a * b;
  show(result);
  return result;
}
/*one line
two lines
three lines*/
function division(a, b) {
  const result = a / b;
  show(result);
  return result;
}
// one line
function show(data) {
  console.log(data);
}
function fnArrow() {
  [].map(i => i * 2);
}
function fnArrowTwo() {
  [].map((i) => {
    show("hello", i);
    return \`\${i + " test"} RESULT \${2 + 4} now \${i}\`;
  });
}
`;

export function test(code:string) {
  const Parser: any = window?.TreeSitter;
  // const {Query}= Parser

  const querySearchFnDeclaration = "(function_declaration) @name";
  const queryArrowFn =
    "(lexical_declaration (variable_declarator value:(arrow_function)  ) ) @name";
  // const querySearchCallExpression = "(call_expression function:(identifier) ) @name";

  let data = Parser.init().then(() => {
    /* the library is ready */
    const parser = new Parser();
    const testing = async () => {
      const JavaScript = await Parser.Language.load(
        process.env.PUBLIC_URL +
          "/assets/TreeSitter/tree-sitter-javascript.wasm"
      );
      parser.setLanguage(JavaScript);
      const runSearchFnDeclaration = JavaScript.query(querySearchFnDeclaration);
      const runSearchFnDeclarationArrow = JavaScript.query(queryArrowFn);
      const sourceCode = code;
      const tree = parser.parse(sourceCode);
      // console.log(tree);
      let listFunctionDeclaration = runSearchFnDeclaration.captures(
        tree.rootNode
      );
      listFunctionDeclaration = listFunctionDeclaration.concat(
        runSearchFnDeclarationArrow.captures(tree.rootNode)
      );
      listFunctionDeclaration.forEach((item: any, index: number) => {
        if (item.node.type === "lexical_declaration") {
          // console.log("here")
          item.name = item.node.children[1].children[0].text;
        }
        if (item.node.type === "function_declaration") {
          item.name = item.node.children[1].text;
        }

        item.id = index;
        item.nothing = "";
      });
      // console.log(listFunctionDeclaration)
      return listFunctionDeclaration;
    };
    return testing();
  });

  return data;
}
