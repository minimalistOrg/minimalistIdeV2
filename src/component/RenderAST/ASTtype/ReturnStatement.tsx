import ChooseType from "../ChooseType";

function ReturnStatement(props:any){

  const data= props.data;
  // console.log(data);

  return(
    <span>
      <span>return </span>
      <span><ChooseType info={data.argument}/></span>
    </span>
  )
}

export default ReturnStatement;
