import ChooseType from "../ChooseType";

function ExpressionStatement(props:any){
  const data= props.data;
  // console.log(data)
  return(
    <span>
    <ChooseType info={data.expression} />
    </span>
  )
}

export default ExpressionStatement;
