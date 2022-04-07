import ChooseType from "../ChooseType";
import RenderAST from "../RenderAST";

function IfStatement(props:any){
  const data= props.data;
  // console.log(data)
  return (
    <div>
      <span>if</span><span>(</span>
      <span><ChooseType info={data.test} /></span>
      <span>)</span>
        <span>{"{"}</span>
      <div>
        <RenderAST ast={data.alternate.body} />
      </div>
      <div>
        <span>{"}"}</span>
        <span>else</span>
        <span>{"{"}</span>
      </div>
      <div>
         <RenderAST ast={data.consequent.body} />
      </div>
      <div>
        <span>{"}"}</span>
      </div>
    </div>
  )
}

export default IfStatement;
