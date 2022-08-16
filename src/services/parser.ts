import { chooseLanguageGist } from "../components/Tree-Sitter/TreeSitter"
import { CodeBlockCodeType } from "../types/interface"

export const parser = {
  getAst: async (data: { code: string; from: string; language: string }[]) => {
    let treeSitterAst = await Promise.all(
      data.map((element: { code: string; from: string; language: string }) => {
        let ast = chooseLanguageGist(
          element.code,
          element.from,
          element.language
        )

        return ast
      })
    )

    let result: CodeBlockCodeType[] = [].concat.apply([], treeSitterAst)
    result.forEach((e: CodeBlockCodeType, index: number) => {
      e.id = index
    })

    return result
  },
}
