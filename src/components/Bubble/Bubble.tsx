import "./Bubble.css"
import { useState,useRef } from "react"
import CodeBlockTS from "../CodeBlock/CodeBlockTS"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../Root-file/slice/callTreeSlice"
import {
  BubbleProps,
  ObjTree,
  RenderType,
  StoreFn,
  FnInfoType,
  CodeBlockCodeType,
} from "../../types/interface"
import { setDataURL } from "../util/fuctions"

let c = 0

export const Bubble = (props: BubbleProps) => {
  const dispatch = useDispatch()
  const reRender: boolean = useSelector(
    (state: RenderType) => state.callTree.value
  )
  const listFn: CodeBlockCodeType[] = useSelector(
    (state: StoreFn) => state.addbubble.value
  )
  const [fninfoData, setFninfoData] = useState<
    (HTMLElement & FnInfoType) | null
  >(null)

  const element= useRef<any>(null)

  const handleAdd = (
    event: { target: HTMLElement },
    data: { value: ObjTree[] }
  ) => {
    let value = data.value
    const readIndex = event.target.parentNode as HTMLElement & FnInfoType

    if (!(readIndex.fninfo === undefined)) {
      const list = (element.current as HTMLElement).querySelectorAll(
        `.CallExpression[data-name="${readIndex.dataset.name}"]`
      )
      const position = Array.from(list).indexOf(readIndex)
      readIndex.fninfo.position = position.toString()

      if (readIndex.fninfo.event) {
        setFninfoData(readIndex)

        value.push(readIndex.fninfo)
        readIndex.fninfo.event = false

        dispatch(add(!reRender))
        setTimeout(() => {
          readIndex.fninfo.Bubble()!.classList.add("CodeBlockHover")
          readIndex.fninfo
            .Bubble()!
            .children[0].classList.add("CodeBlock__header--hover")
        }, 150)

        setDataURL(window.UrlData())
      }
    }

    type LocalBlock = HTMLElement | null | undefined
    if (
      event.target.classList[0] === "identifier" &&
      !(
        (event.target.parentNode as HTMLElement).classList[0] ===
        "CallExpression"
      )
    ) {
      let BubbleBack: LocalBlock = event.target

      do {
        BubbleBack = BubbleBack?.parentElement
      } while (!(BubbleBack?.classList[0] === "CodeBlock"))

      let identifiers: NodeListOf<HTMLElement> = BubbleBack.querySelectorAll(
        `.identifier[data-identifier=${event.target.dataset.identifier}]`
      )
      if (event.target.dataset.color === undefined) {
        c++
      }
      identifiers.forEach((e: HTMLElement) => {
        e.classList.toggle(colorhash(e))
      })
    }
  }

  const colorhash = (data: HTMLElement) => {
    let list: string[] = [
      "color-1",
      "color-2",
      "color-3",
      "color-4",
      "color-5",
      "color-6",
      "color-7",
    ]
    if (c > list.length - 1) {
      c = 0
    }
    if (data.dataset.color === undefined) {
      data.dataset.color = list[c]
      return data.dataset.color
    } else {
      return data.dataset.color
    }
  }

  const closeBubble = (parent: ObjTree[], children: ObjTree) => {
    if (!(children.element() === null)) {
      children.value = [];
      (children.element() as HTMLElement & FnInfoType).fninfo.event = true;
      (children.element() as HTMLElement & FnInfoType).fninfo.Bubble = () => null;
      (
        (
          children.element() as HTMLElement & FnInfoType
        ).fninfo.element() as HTMLElement
      ).classList.remove("CallExpressionHover")
    }

    const listParent: number = parent.indexOf(children)
    parent.splice(listParent, 1)

    setDataURL(window.UrlData())
    dispatch(add(!reRender))
  }

  const Codebubble = (
    children: ObjTree,
    parent: ObjTree[],
    fnindex: number,
    fninfoData: (HTMLElement & FnInfoType) | null | undefined,
    id: string
  ) => {
    return (
      <CodeBlockTS
        code={listFn[fnindex]}
        id={id}
        data={children}
        call={fninfoData}
        openBubble={(event: { target: HTMLElement }) =>
          handleAdd(event, children)
        }
        closeBubble={() => closeBubble(parent, children)}
      />
    )
  }

  return (
    <div className="BubbleContainer">
      {props.tree.map((e: ObjTree, index: number) => {
        return (
          <div key={index} style={{ order: e.order }} className="RowBubble">
            <div ref={element} className="Bubble">
              {Codebubble(e, props.tree, e.index, props.call, e.id)}
            </div>
            <div className="ColBubbles">
              <Bubble fnindex={e.index} tree={e.value} call={fninfoData} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
