import { ChooseType } from "../ChooseType"
import { useSelector } from "react-redux"
import { useEffect, useState, useRef } from "react"
import { globalCounter } from "../util/useGlobalCounter"
import { v4 as uuidv4 } from "uuid"
import {
  CodeBlockCodeType,
  FnInfoType,
  TypeComponentProps,
} from "../../../types/interface"

export const CallExpression = ({ data }: TypeComponentProps) => {
  const [functionIndex, setFunctionIndex] = useState<number>(-1)
  const [name, setName] = useState("")
  const [params, setParams] = useState([])
  const [id, setId] = useState("")
  const [ied, setIed] = useState("")
  const fnOrder = globalCounter()
  const expression = useRef<HTMLElement | null>(null)
  const listOfFunctions = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  )

  function validifFnCall() {
    const expressionType = data.children[0].type

    if (expressionType === "identifier") {
      setName(data.children[0].text)
      setId(uuidv4())
      setParams(data.children[1].children as [])

      const position = listOfFunctions.find((element) => element.name === data.children[0].text)

      if (position) {
        setFunctionIndex(position.id)
      }
    }
  }

  useEffect(() => {
    if (ied === "") {
      setIed(uuidv4())
    }

    const getName = functionIndex > -1 ? listOfFunctions[functionIndex as number].name : ""
    const functionData = {
      id: id,
      ied: expression.current?.id,
      params: params,
      name: getName,
      index: functionIndex,
      value: [],
      event: functionIndex > -1 ? true : false,
      order: fnOrder,
      element: () => {
        return document.getElementById("id" + ied)
      },
      Bubble: () => {
        let result = document.getElementById("id" + id)
        return result
      },
      visibility: true,
    }

    validifFnCall()

    if (functionIndex > -1) {
      Object.defineProperty(functionData.element(), "fninfo", {
        value: functionData,
        writable: true,
      })
    }
    //eslint-disable-next-line
  }, [functionIndex])

  const handleMouseOver = (data: { currentTarget: (HTMLElement & FnInfoType) | null }) => {
    if (data.currentTarget?.fninfo?.Bubble() !== undefined) {
      data.currentTarget?.fninfo?.Bubble()?.classList.add("CodeBlockHover")
      data.currentTarget?.fninfo.Bubble()?.children[0].classList.add("CodeBlock__header--hover")
    }
  }

  const handleMouseLeave = (data: {
    currentTarget: (HTMLElement & FnInfoType) | null
  }) => {
    if (data.currentTarget?.fninfo === undefined) {
      return
    }

    if (data.currentTarget?.fninfo.Bubble() !== undefined) {
      data.currentTarget?.fninfo.Bubble()?.classList.remove("CodeBlockHover")
      data.currentTarget?.fninfo.Bubble()?.children[0].classList.remove("CodeBlock__header--hover")
    }
  }

  const typeCall = () => {
    if (functionIndex > -1) {
      return "CallExpression"
    } else {
      return "CallExpression--member_expression"
    }
  }

  return (
    <span
      className={typeCall()}
      onMouseOver={handleMouseOver as () => void}
      onMouseLeave={handleMouseLeave as () => void}
      ref={expression}
      id={"id" + ied}
      data-name={name}
      data-test-id="fncall"
    >
      <ChooseType info={data.children[0]} />

      <span>
        <ChooseType info={data.children[1]} />
      </span>
    </span>
  )
}
