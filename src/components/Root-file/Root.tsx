import "./Root.css"
import "../RenderTreeSitter/highlight.css"
import Bubble from "../Bubble/Bubble"
import CallTree from "../CallTree/CallTree"
import FuzzySearch from "../FuzzySearch/FuzzySearch"
import { useEffect, useState } from "react"
import { TreeCall as json, resetTreeCall } from "./CallTree"
import { useDispatch, useSelector } from "react-redux"
import { addBubbles } from "./slice/addBubbleSlice"
import MenuHeader from "../MenuHeader/MenuHeader"
import { LoadCode } from "../MenuHeader/LoadCode/LoadCode"
import { add as callrender } from "./slice/callTreeSlice"
import { CodeBlockCodeType, Gist } from "../../types/interface"
import { urlvalid } from "../util/fuctions"
import { useAlert } from "react-alert"
import EasyUrlParams from "../util/EasyUrlParams"
import { parser } from "../../services/parser"

export const Root = () => {
  const dispatch = useDispatch()
  const [wait, setWait] = useState(false)
  const reRender = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  )
  const leftArea = useSelector(
    (state: { callTree: { sidebar: number } }) => state.callTree.sidebar
  )
  const [placeholderinput, setPlaceholderinput] = useState(
    "Search functions by name"
  )
  const [opengist, setOpengist] = useState(true)
  const alert = useAlert()

  const setGistCode = async (data: Gist[]) => {
    setPlaceholderinput("Loading data...")
    resetTreeCall()
    dispatch(callrender(!reRender))
    dispatch(addBubbles([]))

    const ast = await parser.getAst(data.map((gist) =>
      ({ code: gist.content, from: gist.filename, language: gist.language })
    ))

    ast.forEach((codeBlock: CodeBlockCodeType, index: number) => {
      codeBlock.id = index
    })

    dispatch(addBubbles(ast))
    setWait(true)
    setPlaceholderinput("Search functions by name")
  }

  const setDataCode = (data: CodeBlockCodeType[]) => {
    setPlaceholderinput("Loading data...")
    resetTreeCall()
    dispatch(callrender(!reRender))
    dispatch(addBubbles([]))
    dispatch(addBubbles(data))
    setWait(true)
    Object.defineProperty(window, "fnlist", {value:data,writable:true})
    setPlaceholderinput("Search functions by name")
  }

  useEffect(() => {
    let getrepourl = new EasyUrlParams("repository")
    let valid = urlvalid(getrepourl.get()?.value as string)
    if (!(getrepourl.get() === undefined)) {
      if (valid) {
        setOpengist(false)
      } else {
        if (getrepourl.get()?.value !== "") {
          alert.error("ERROR URL PARAMS")
        }
      }
    }
  }, [alert])

  const BubbleLoad = (state: Boolean) => {
    if (state) {
      return (
        <>
          <Bubble tree={json} />
          <div className="FuzzySearch-container">
            <FuzzySearch placeholder={placeholderinput} />
          </div>
        </>
      )
    } else {
      return <p>Loading...</p>
    }
  }

  const openModalGist = () => {
    setOpengist(!opengist)
  }
  const fnlist = { gist: openModalGist }

  return (
    <div className="d-flex">
      <section>
        <CallTree data={json} />
      </section>

      <section className="code-area" style={{left: leftArea + "px"}}>
        <section className="MenuHeader-container">
          <MenuHeader fn={fnlist} />
        </section>

        <section className="BubbleArea">{BubbleLoad(wait)}</section>

        <LoadCode
          load={setGistCode}
          setData={setDataCode as () => void}
          isOpen={opengist}
          event={fnlist}
        />
      </section>
    </div>
  )
}
