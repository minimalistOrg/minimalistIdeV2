import {useEffect,useRef} from "react"
import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import ChooseType from "../ChooseType";

function JsxClosingElement(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);
  const element= useRef<HTMLElement>(null)
  useEffect(()=>{
    // const brotherElement= (element.current as HTMLElement).parentNode?.parentNode
    // const fncall= brotherElement?.querySelector(".CallExpression")
    // // const fninfo= fncall.fninfo
    // const clone= fncall?.cloneNode(true)
    // // Object.defineProperty(clone, "fninfo", {value:fninfo,writable:true})
    // const identifier= element.current?.children[2]
    // identifier?.replaceWith(clone as Node)
  },[element.current])

  return (
    <span ref={element} className="JsxClosingElement">
      {data.children.map((e: TreesitterData, index: number) => {
        return (
          <span key={index}>
            <ChooseType info={e} />
          </span>
        );
      })}
    </span>
  );
}

export default JsxClosingElement;
