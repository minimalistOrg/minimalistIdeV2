import {useRef} from "react"
import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import ChooseType from "../ChooseType";

function JsxClosingElement(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);
  const element= useRef<HTMLElement>(null)

  function inter(){

    const brotherElement= (element.current as HTMLElement).parentNode?.parentNode
    const fncall:any= brotherElement?.querySelectorAll(".identifier")
    const jsxOpen= (fncall[0] as HTMLElement).parentNode
    const jsxClose= (fncall[1] as HTMLElement).parentNode
    fncall[1].parentNode.remove()
    fncall[0].parentNode.remove()
    const firstJSX= brotherElement?.children[0].children[0]
    // console.log(jsxOpen,jsxClose,element.current?.lastChild,firstJSX)    
    element.current?.insertBefore(jsxOpen as Node,element.current.lastChild)
    firstJSX?.insertBefore(jsxClose as Node,firstJSX.lastChild)

  }

  return (
    <span ref={element} onMouseOver={inter} className="JsxClosingElement">
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
