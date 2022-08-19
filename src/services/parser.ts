import { CodeBlockCodeType } from "../types/interface"

declare global {
  interface Window {
    TreeSitter?: {}
  }
}

const SUPPORTED_LANGUAGES = ['javascript', 'typescript'] as const
type Language = typeof SUPPORTED_LANGUAGES[number]

const getWasmFile = (language: Language) => {
  if (language === 'javascript') {
    return '/assets/TreeSitter/tree-sitter-javascript.wasm'
  } else if (language === 'typescript') {
    return '/assets/TreeSitter/tree-sitter-tsx.wasm'
  }
}

const parse = async (
  code: string,
  from: string,
  language: Language
) => {
  const Parser: any = window?.TreeSitter
  const wasmFile = getWasmFile(language.toLowerCase() as Language)

  const querySearchFnDeclaration =
    "(function_declaration name:(identifier)) @name"
  const queryArrowFn =
    "(lexical_declaration (variable_declarator name:(identifier) value:(arrow_function)  ) ) @name"
  // const querySearchCallExpression = "(call_expression function:(identifier) ) @name"

  await Parser.init()

  const parser = new Parser()
  const JavaScript = await Parser.Language.load(
    `${process.env.PUBLIC_URL}${wasmFile}`
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

export const parser = {
  getAst: async (data: { code: string; from: string; language: string }[]) => {
    const treeSitterAst = await Promise.all(
      data.map((element: { code: string; from: string; language: string }) => {
        const lowerCaseLanguage = element.language.toLowerCase()

        if (lowerCaseLanguage === 'javascript' || lowerCaseLanguage === 'typescript') {
          return parse(element.code, element.from, lowerCaseLanguage)
        }

        throw new Error(`Language not supported: ${element.language}`)
      })
    )

    const result: CodeBlockCodeType[] = [].concat.apply([], treeSitterAst)
    result.forEach((e: CodeBlockCodeType, index: number) => {
      e.id = index
    })

    return result
  },
}
