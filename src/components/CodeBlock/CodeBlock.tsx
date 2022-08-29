import {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  RefObject,
} from "react"
import { useSelector, useDispatch } from "react-redux"
import ChooseType from "../RenderTreeSitter/ChooseType"
import "./CodeBlock.css"
import { BubbleCollapse } from "./Functions/BubbleCollapse"
import IcoClose from "../../icons/IcoClose"
import IcoCollapse from "../../icons/IcoCollapse"
import Resize from "./CodeBlock__Resize"
import {
  CodeBlockType,
  FnInfoType,
  TreesitterData,
  CodeBlockCodeType,
} from "../../types/interface"
import { checkFunctionType } from "../util/fuctions"
import { add } from "../Root-file/slice/callTreeSlice"
import { resetGlobal } from "../RenderTreeSitter/util/useGlobalCounter"

export const CodeBlock = (props: CodeBlockType) => {
  const dispatch = useDispatch()
  const dataBubbleTree = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  )
  const [title, setTitle] = useState<string>("Loading...")
  const [code, setCode] = useState<
    TreesitterData | { type: string; text: string } | undefined
  >(checkFunctionType(props.code).code)
  const [params, setParams] = useState<TreesitterData[]>([])
  const activeBubble: RefObject<HTMLDivElement> = useRef(null)
  const codeAsText: MutableRefObject<null | HTMLElement> = useRef(null)
  const [paramok, setParamok] = useState(false)

  const listOfFunctions = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  )

  useEffect(() => {
    Resize(
      activeBubble.current as HTMLElement,
      codeAsText?.current as HTMLElement
    )

    if (!(props.code === undefined)) {
      if (props.code.node.children[3] === undefined) {
        setCode(checkFunctionType(props.code).code)
        setTitle(props.code.node.children[1].children[0].text)
        setParams(checkFunctionType(props.code).params)
      } else {
        setTitle(props.code.node.children[1].text)
        setCode(checkFunctionType(props.code).code)
        setParams(checkFunctionType(props.code).params)
      }
    }

    const bubbleById = activeBubble.current
    props.data.Bubble = () => activeBubble.current
    Object.defineProperty(bubbleById, "fninfo", {
      value: props.data,
      writable: true,
    })

    const bubble = (activeBubble.current as HTMLElement).parentElement
      ?.parentElement?.parentElement?.parentElement?.parentElement?.children[0]
    const validParent = bubble?.classList.contains("Bubble")

    if (validParent) {
      let findFncall:any = bubble?.querySelectorAll(
        `.CallExpression[data-name="${listOfFunctions[props.data.index].name}"]`
      )
      const position= parseInt(props.data.position !== undefined ? props.data.position as string : "0")

      findFncall= findFncall![position]

      if (findFncall !== (null || undefined)) {
        const newRef = (findFncall as HTMLElement & FnInfoType).fninfo
        newRef.element = () => findFncall as HTMLElement
        newRef.Bubble = () => activeBubble.current
        newRef.event= false

        props.data.element = () => findFncall as HTMLElement
        props.data.Bubble = () => activeBubble.current

        props.data.event= newRef.event
        props.data.params = newRef.params
        props.data.order = newRef.order

        Object.defineProperty(bubbleById, "fninfo", {
          value: props.data,
          writable: true,
        })

        const row = (activeBubble.current as HTMLElement).parentElement?.parentElement

        //eslint-disable-next-line
        if (row != undefined){
            row.style.order= props.data.order.toString()
            dispatch(add(!dataBubbleTree))
        }
        setParamok(true)
      }
    }
    resetGlobal(1)
    //eslint-disable-next-line
  }, [props.data, title, paramok, code])

  const handleMouseOver = (event: { currentTarget: HTMLElement }) => {
    const data = (event.currentTarget.parentNode as HTMLElement & FnInfoType).fninfo

    if (!(data.element() === null)) {
      data.element()?.classList.add("CallExpressionHover")

      if (!(data.Bubble() === null)) {
        data.Bubble()?.classList.add("CodeBlockHover")
      }
    } else {
      (event.currentTarget.parentNode as HTMLElement & FnInfoType).classList.add("CodeBlockHover")
    }
  }

  const handleMouseLeave = (event: { currentTarget: HTMLElement }) => {
    const data = (event.currentTarget.parentNode as HTMLElement & FnInfoType).fninfo

    if (!(data.element() === null)) {
      data.element()?.classList.remove("CallExpressionHover")

      if (!(data.Bubble() === null)) {
        data.Bubble()?.classList.remove("CodeBlockHover")
      }
    } else {
      (event.currentTarget.parentNode as HTMLElement).classList.remove("CodeBlockHover")
    }
  }

  const identifierHover = (event: {
    currentTarget: HTMLElement
    target: HTMLElement
  }) => {
    const elements: NodeListOf<HTMLElement> =
      event.currentTarget.querySelectorAll(".identifier")

    elements.forEach((e: HTMLElement) => {
      e.classList.remove("identifierHover")
    })
    if (event.target.classList[0] === "identifier") {
      const elements: NodeListOf<HTMLElement> =
        event.currentTarget.querySelectorAll(
          `.identifier[data-identifier=${event.target.dataset.identifier}]`
        )
      elements.forEach((e: HTMLElement) => {
        e.classList.add("identifierHover")
      })
    }
  }

  const identifierHoverOut = (event: { currentTarget: HTMLElement }) => {
    let elements: NodeListOf<HTMLElement> =
      event.currentTarget.querySelectorAll(".identifier")
    elements.forEach((e: HTMLElement) => {
      e.classList.remove("identifierHover")
    })
  }

  const paramsHoverOut = (event: { currentTarget: HTMLElement }) => {
    const CodeBlock = event.currentTarget?.parentNode?.parentNode?.parentNode?.parentNode as HTMLElement & FnInfoType
    const body = event.currentTarget?.parentNode?.parentNode?.parentNode?.nextSibling as HTMLElement
    const elements: NodeListOf<HTMLElement> = body?.querySelectorAll(".identifier")

    elements.forEach((element) => {
      element.classList.remove("identifierHover")
    })

    if (
      event.currentTarget.dataset.identifier &&
      !(CodeBlock.fninfo.element() === null)
    ) {
      let BubbleBack = CodeBlock.fninfo.element()

      do {
        BubbleBack = BubbleBack?.parentNode as HTMLElement
      } while (!(BubbleBack?.classList[0] === "CodeBlock"))

      const elements: NodeListOf<HTMLElement> = BubbleBack.querySelectorAll(".identifier")

      elements.forEach((element) => {
        element.classList.remove("identifierHover")
      })
    }
  }

  const paramsHover = (event: {
    currentTarget: HTMLElement
    target: HTMLElement
  }) => {
    const CodeBlock = event.currentTarget.parentNode?.parentNode?.parentNode
      ?.parentNode as HTMLElement & FnInfoType
    let body = event.currentTarget.parentNode?.parentNode?.parentNode?.nextSibling as HTMLElement
    const elements: NodeListOf<HTMLElement> = body.querySelectorAll(".identifier")

    elements.forEach((element) => {
      element.classList.remove("identifierHover")
    })

    if (event.target.classList[0] === "identifier") {
      const body = event.currentTarget.parentNode?.parentNode?.parentNode?.nextSibling as HTMLElement
      const elements: NodeListOf<HTMLElement> = body.querySelectorAll(
        `.identifier[data-identifier=${event.target.dataset.identifier}]`
      )

      elements.forEach((element) => {
        element.classList.add("identifierHover")
      })

      if (
        event.currentTarget.dataset.identifier &&
        !(CodeBlock.fninfo.element() === null)
      ) {
        let BubbleBack = CodeBlock.fninfo.element()

        do {
          BubbleBack = BubbleBack?.parentNode as HTMLElement
        } while (!(BubbleBack?.classList[0] === "CodeBlock"))

        const elements: NodeListOf<HTMLElement> = BubbleBack.querySelectorAll(
          `.identifier[data-identifier=${event.currentTarget.dataset.identifier}]`
        )

        elements.forEach((element) => {
          element.classList.add("identifierHover")
        })
      }
    }
  }

  const checkParams = (index: number) => {
    const txt: HTMLElement & FnInfoType = activeBubble.current as any

    if (txt?.fninfo.params[index] === undefined) {
      return
    }

    const identifier = txt?.fninfo.params[index].text

    // eslint-disable-next-line
    const check: Boolean = /^[^\"\s\d][^\s\"\(\)]*[^\"\(\)\s]$/gm.test(identifier)

    if (check) {
      return identifier
    } else {
      return
    }
  }

  return (
    <div
      className="CodeBlock"
      data-test-id="Bubble"
      ref={activeBubble}
      data-title={title}
    >
      <div
        className="CodeBlock__header"
        data-testid="BubbleOrder"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="CodeBlock__title">
          <div onClick={BubbleCollapse} className="CodeBlock__collapse">
            <IcoCollapse />
          </div>
          {title}

          <span className="CodeBlock__arguments">
            {" "}

            {params.map((e, index) => {
              return (
                <span
                  key={index}
                  onMouseLeave={paramsHoverOut}
                  onMouseMove={paramsHover as () => void}
                  data-identifier={checkParams(index)}
                >
                  <ChooseType info={e} />
                </span>
              )
            })}{" "}
          </span>
        </div>

        <button
          className="CodeBlock__menu"
          data-test-id="closeBubble"
          title="Close"
          onClick={props.closeBubble}
        >
          <IcoClose size={20} />{" "}
        </button>
      </div>

      <div
        className="CodeBlock__body"
        onMouseMove={identifierHover as () => void}
        onMouseLeave={identifierHoverOut}
        onClick={props.openBubble as () => void}
      >
        <pre>
          <code ref={codeAsText}>
            <ChooseType info={code} />
          </code>
        </pre>
      </div>
    </div>
  )
}
