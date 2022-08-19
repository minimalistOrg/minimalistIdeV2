import { useAlert } from "react-alert"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import ReactModal from "react-modal"
import ClockwiseIco from "../../../icons/ClockwiseIco"
import IcoClose from "../../../icons/IcoClose"
import {
  CodeBlockCodeType,
  LoadCodeType,
  responseGithubType,
} from "../../../types/interface"
import { urlvalid, userdata, startParams } from "../../util/fuctions"
import EasyUrlParams from "../../util/EasyUrlParams"
import { add } from "../../Root-file/slice/callTreeSlice"
import style from "./LoadCode.module.css"
import { apiService } from "../../../services/apiService"
import { parser } from "../../../services/parser"

export const LoadCode = (props: LoadCodeType) => {
  const code = useRef<HTMLInputElement | null>(null)
  const alert = useAlert()

  const [textValidURL, setTextValidURL] = useState("")
  const [enablebtn, setEnablebtn] = useState(false)
  const [btnload, setBtnload] = useState("Load")
  const [result, setResult] = useState<string | JSX.Element>("")
  const dispatch = useDispatch()

  const listFn = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  )

  const dataBubbleTree = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  )

  const validToken = useSelector(
    (state: { jwt: { key: string } }) => state.jwt.key
  )

  const getRepo = apiService.getRepo(setResult, validToken)

  const selectURL = (from: string) => {
    const repository = new EasyUrlParams("repository")
    if (from !== undefined) {
      repository.set(from)
    }

    const url = repository.get()?.value
    if (url !== undefined) {
      const github = /https:\/\/github.com\//

      if (github.test(url)) {
        setResult(loadingElement)
        getDetailsURL(url)
      } else {
        setResult(loadingElement)
        loadProject(url)
      }
    }
  }

  useEffect(() => {
    const section = async () => {
      await apiService.login(dispatch)()
      let state = new EasyUrlParams("repository").get()?.value

      if (state && state !== "") {
        selectURL(state)
      }
    }
    section()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    startParams(listFn)
    dispatch(add(!dataBubbleTree))
    // eslint-disable-next-line
  }, [listFn])

  const loadingElement = (
    <>
      <span className={style.textloading}>
        <span className={style.ico}>
          <ClockwiseIco size={16} />
        </span>
        Loading...
      </span>
    </>
  )

  let urlData: any = {}

  const getDetailsURL = async (url: string) => {
    const urlrepo: string = url
    let regex =
      /(https:\/\/github.com\/)([\w\d\-_]+)(\/)([\w\d\-_]+)(\/)?((tree)(\/)([\w\d\-_]+))?/g

    let validURL: boolean = regex.test(url)
    if (!validURL) {
    }

    const username: string = urlrepo.replace(regex, "$2")
    const repo: string = urlrepo.replace(regex, "$4")
    let rama: string = urlrepo.replace(regex, "$9")
    const urldata = {
      username: username,
      repo: repo,
      url: urlrepo,
      rama: rama,
    }

    urlData = urldata
    if (urldata.rama === "") {
      let info = await getRepo(
        `${urldata.username}/${urldata.repo}`,
        "branches=true"
      )
      let files = await getRepo(
        `${urldata.username}/${urldata.repo}`,
        `tree=${info[0].name}`
      )
      searchJavascript(files.tree)
    } else {
      let files = await getRepo(
        `${urldata.username}/${urldata.repo}`,
        `tree=${urldata.rama}`
      )
      searchJavascript(files.tree)
    }
  }

  const detectLanguage = (path: string) => {
    let patron: RegExpExecArray | string[] | null = /\.[a-z]{0,3}$/g.exec(path)
    if (patron === null) {
      patron = ["null"]
    }
    switch (patron[0]) {
      case ".ts":
        return "TypeScript"
      case ".tsx":
        return "TypeScript"
      case ".js":
        return "Javascript"
      case ".jsx":
        return "Javascript"
    }
  }

  const searchJavascript = async (files: responseGithubType[]) => {
    const jsFiles: responseGithubType[] = files.filter(
      (element: responseGithubType) => {
        let regexJs = /\.js$|\.jsx$|\.ts$|\.tsx$/g
        element.language = detectLanguage(element.path)
        return regexJs.test(element.path)
      }
    )
    if (jsFiles.length === 0) {
      setResult(
        <span className="LoadCode__msg">
          The github repo doesn't include any Javascript files
        </span>
      )
    } else {
      const dataFiles = await apiService.loadAllFiles(setResult, validToken)(jsFiles, urlData)
      const ast = await parser.getAst(dataFiles)

      props.setData(ast)
      setResult("")
      resetValues()
      userdata()
      alert.success("Code loaded successfully")
    }
  }

  const loadProject = async (url: string) => {
    setBtnload("Wait...")
    setEnablebtn(false)
    setResult(loadingElement)

    const response = await apiService.getProject(validToken, url)

    if (!response.success) {
      setResult(
        <span className="LoadCode__msg">
          {response.errorString || response.code}
        </span>
      );
      return
    }

    setEnablebtn(true)
    props.load(response.jsFiles)
    setResult("")
    resetValues()
    userdata()
    alert.success("Code loaded successfully")
  }

  const validURL = (event: { target: { value: string } }) => {
    let valid = urlvalid(event.target.value)

    if (valid) {
      setTextValidURL("")
      setEnablebtn(true)
    } else {
      setTextValidURL("URL Incorrect")
      setEnablebtn(false)
    }
  }

  const resetValues = () => {
    props.event.gist()
    setResult("")
    setTextValidURL("")
    setEnablebtn(false)
  }

  const focusInput = () => {
    (code.current as HTMLInputElement).focus()
  }

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      new EasyUrlParams("data").remove()
      selectURL((code.current as HTMLInputElement).value as string)
    }
  }

  return (
    <ReactModal
      isOpen={props.isOpen}
      className={style.modal}
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
      onRequestClose={resetValues}
      onAfterOpen={focusInput}
      ariaHideApp={false}
    >
      <div className={style.header}>
        <div className={style.headerContainer}>
          <span>Load Code from a Gist</span>
        </div>
        <div>
          <button className={style.close} title="Close" onClick={resetValues}>
            <IcoClose size={16} />
          </button>
        </div>
      </div>
      <div className={style.body}>
        <h3 style={{ textAlign: "center", margin: "0px" }}>{result}</h3>
        <div className={style.inputContent}>
          <input
            ref={code}
            type="text"
            className={style.input}
            placeholder="https://gist.github.com/.../..."
            onChange={validURL}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <span className={style.error}>{textValidURL}</span>
        </div>
        <div>
          <button
            className={style.btn}
            onClick={() => {
              new EasyUrlParams("data").remove()
              selectURL((code.current as HTMLInputElement).value as string)
            }}
            disabled={!enablebtn}
          >
            {btnload}
          </button>
        </div>
      </div>
    </ReactModal>
  )
}
