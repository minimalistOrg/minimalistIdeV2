import { useAlert } from "react-alert"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import ReactModal from "react-modal"
import ClockwiseIco from "../../../icons/ClockwiseIco"
import IcoClose from "../../../icons/IcoClose"
import {
  CodeBlockCodeType,
  LoadCodeType,
} from "../../../types/interface"
import { urlvalid, userdata, startParams } from "../../util/fuctions"
import EasyUrlParams from "../../util/EasyUrlParams"
import { add } from "../../Root-file/slice/callTreeSlice"
import style from "./LoadCode.module.css"
import { apiService } from "../../../services/apiService"

export const LoadCode = (props: LoadCodeType) => {
  const code = useRef<HTMLInputElement | null>(null)
  const alert = useAlert()

  const [textValidURL, setTextValidURL] = useState("")
  const [submitButtonEnabled, enableSubmitButton] = useState(false)
  const [btnload, setBtnload] = useState("Load")
  const [result, setResult] = useState<string | JSX.Element>("")
  const dispatch = useDispatch()

  const listOfFunctions = useSelector(
    (state: { addbubble: { value: CodeBlockCodeType[] } }) =>
      state.addbubble.value
  )

  const reRender = useSelector(
    (state: { callTree: { value: boolean } }) => state.callTree.value
  )

  const validToken = useSelector(
    (state: { jwt: { key: string } }) => state.jwt.key
  )

  const selectURL = (from: string) => {
    const repository = new EasyUrlParams("repository")
    if (from !== undefined) {
      repository.set(from)
    }

    const url = repository.get()?.value
    if (url) {
      setResult(loadingElement)
      loadProject(url)
    }
  }

  useEffect(() => {
    const section = async () => {
      await apiService.login(dispatch)()
      let repository = new EasyUrlParams("repository").get()?.value

      if (repository && repository !== "") {
        selectURL(repository)
      }
    }
    section()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    startParams(listOfFunctions)
    dispatch(add(!reRender))
    // eslint-disable-next-line
  }, [listOfFunctions])

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

  const loadProject = async (url: string) => {
    setBtnload("Wait...")
    enableSubmitButton(false)
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

    enableSubmitButton(true)
    props.load(response.files)
    setResult("")
    resetValues()
    userdata()
    alert.success("Code loaded successfully")
  }

  const validURL = (event: { target: { value: string } }) => {
    let valid = urlvalid(event.target.value)

    if (valid) {
      setTextValidURL("")
      enableSubmitButton(true)
    } else {
      setTextValidURL("URL Incorrect")
      enableSubmitButton(false)
    }
  }

  const resetValues = () => {
    props.event.gist()
    setResult("")
    setTextValidURL("")
    enableSubmitButton(false)
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
            disabled={!submitButtonEnabled}
          >
            {btnload}
          </button>
        </div>
      </div>
    </ReactModal>
  )
}
