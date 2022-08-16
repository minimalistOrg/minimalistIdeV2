import "./Root.css"
import "../RenderTreeSitter/highlight.css"
import Bubble from "../Bubble/Bubble"
import CallTree from "../CallTree/CallTree"
import FuzzySearch from "../FuzzySearch/FuzzySearch"
import { chooseLanguageGist } from "../Tree-Sitter/TreeSitter"
import { useEffect, useState } from "react"
import { TreeCall as json, resetTreeCall } from "./CallTree"
import { useDispatch, useSelector } from "react-redux"
import { add } from "./slice/addBubbleSlice"
import MenuHeader from "../MenuHeader/MenuHeader"
import { LoadCode } from "../MenuHeader/LoadCode/LoadCode"
import { add as callrender } from "./slice/callTreeSlice"
import { CodeBlockCodeType, responseGistType } from "../../types/interface"
import { urlvalid } from "../util/fuctions"
import { useAlert } from "react-alert"
import EasyUrlParams from "../util/EasyUrlParams"

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

  async function setGistCode(data: responseGistType[]) {
    setPlaceholderinput("Loading data...")
    resetTreeCall()
    dispatch(callrender(!reRender))
    dispatch(add([]))
    async function getCodeParse(e: responseGistType) {
      let response = await chooseLanguageGist(
        e.content,
        e.filename,
        e.language
      )
      let result = await response
      return result
    }
    let allfn: CodeBlockCodeType[] = await Promise.all(
      data.map(async (e: responseGistType) => {
        let x = await getCodeParse(e)
        return x
      })
    )

    let result: CodeBlockCodeType[] = [].concat.apply([], allfn as [])
    result.forEach((e: CodeBlockCodeType, index: number) => {
      e.id = index
    })
    dispatch(add(result))
    setWait(true)
    setPlaceholderinput("Search functions by name")
  }

  function setDataCode(data: CodeBlockCodeType[]) {
    setPlaceholderinput("Loading data...")
    resetTreeCall()
    dispatch(callrender(!reRender))
    dispatch(add([]))
    dispatch(add(data))
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

  function BubbleLoad(state: Boolean) {
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

  function OpenModalGist() {
    setOpengist(!opengist)
  }
  const fnlist = { gist: OpenModalGist }

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
