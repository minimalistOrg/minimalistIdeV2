import {api} from "./testdata"
import "./highlight.css"
import ChooseType from "./ChooseType"

function RenderAST(){
const data= api.body[0].body.body

// data.forEach((e:any)=>{console.log(e)})

  return (
    <div style={{border:"solid 1px blue"}}>
      { data.map((info:any,index:number) => {
        return <div key={index}>
          <ChooseType info={info} />
        </div> 
      } ) }
    </div>
  )
}

export default RenderAST;
