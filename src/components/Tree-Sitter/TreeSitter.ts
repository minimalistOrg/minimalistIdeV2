import { CodeBlockCodeType } from "../../types/interface"

declare global {
  interface Window {
    TreeSitter?: {}
  }
}

const parse = async (
  code: string,
  from: string,
  wasm: string,
  language: string
) => {
  const Parser: any = window?.TreeSitter

  const querySearchFnDeclaration =
    "(function_declaration name:(identifier)) @name"
  const queryArrowFn =
    "(lexical_declaration (variable_declarator name:(identifier) value:(arrow_function)  ) ) @name"
  // const querySearchCallExpression = "(call_expression function:(identifier) ) @name"

  await Parser.init()

  const parser = new Parser()
  const JavaScript = await Parser.Language.load(
    `${process.env.PUBLIC_URL}${wasm}`
  )
  parser.setLanguage(JavaScript)

  const runSearchFnDeclaration = JavaScript.query(querySearchFnDeclaration)
  const runSearchFnDeclarationArrow = JavaScript.query(queryArrowFn)
  const sourceCode = code
  const tree = parser.parse(sourceCode)
  let listFunctionDeclaration = runSearchFnDeclaration.captures(
    tree.rootNode
  )
  listFunctionDeclaration = listFunctionDeclaration.concat(
    runSearchFnDeclarationArrow.captures(tree.rootNode)
  )

  listFunctionDeclaration.forEach((item: CodeBlockCodeType, index: number) => {
    if (item.node.type === "lexical_declaration") {
      item.name = item.node.children[1].children[0].text
    }
    if (item.node.type === "function_declaration") {
      item.name = item.node.children[1].text
    }
    if (item.node.parent.type === "statement_block") {
      listFunctionDeclaration.splice(index, 1)
    }

    item.id = index
    item.nothing = ""
    item.from = from
    item.language = language
  })

  return listFunctionDeclaration
}

export function getAstJsx(code: string, from: string, language: string) {
  return parse(
    code,
    from,
    "/assets/TreeSitter/tree-sitter-javascript.wasm",
    language
  )
}

export function getAstTsx(code: string, from: string, language: string) {
  return parse(code, from, "/assets/TreeSitter/tree-sitter-tsx.wasm", language)
}

export function chooseLanguageGist(
  code: string,
  from: string,
  language: string
) {
  switch (language) {
    case "JavaScript":
      return getAstJsx(code, from, "JavaScript")
    case "Javascript":
      return getAstJsx(code, from, "JavaScript")
    case "TypeScript":
      return getAstTsx(code, from, "TypeScript")
    case "Typescript":
      return getAstTsx(code, from, "TypeScript")
    case "TSX":
      return getAstTsx(code, from, "TypeScript")
  }
}
