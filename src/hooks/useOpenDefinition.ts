import { CodeBlockCodeType } from "../types/interface"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { globalCounter } from "../components/RenderTreeSitter/util/useGlobalCounter"

export const useOpenDefinition = (data: string, option: { tag: string[] }) => {
  const element = useRef<HTMLElement>(null)
  const [functionIndex, setFunctionIndex] = useState(-1)
  const functionOrder = globalCounter

  const functions = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  )

  const validifFnCall = () => {
    const position = functions.find((e) => e.name === data)

    if (position) {
      setFunctionIndex(position.id)
    }
  }

  useEffect(() => {
    const detectTag = (element.current as HTMLElement).parentNode?.parentNode as HTMLElement
    const state = option.tag.map((e: string) => {
      return detectTag.classList.contains(e)
    })
    const verification = state.includes(true)

    if (verification) {
      const functionCall = element.current?.parentNode as HTMLElement
      validifFnCall()

      if (functionIndex > -1) {
        functionCall.classList.add("CallExpression")
        functionCall.dataset.name = data

        const functionData = {
          params: [],
          name: data,
          index: functionIndex,
          value: [],
          event: functionIndex > -1 ? true : false,
          order: functionOrder(),
          element: () => null,
          Bubble: () => null,
          visibility: true,
        }

        Object.defineProperty(functionCall, "fninfo", {
          value: functionData,
          writable: true,
        })
      }
    }
    //eslint-disable-next-line
  }, [functionIndex])

  return element
}
