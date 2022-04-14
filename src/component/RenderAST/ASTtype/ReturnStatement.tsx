import ChooseType from "../ChooseType";

function ReturnStatement(props:{data:{argument: object}}):JSX.Element{

  const data:{argument: object}= props.data;
  // console.log(data);
  return(
    <span>
      <span>return </span>
      <span><ChooseType info={data.argument}/></span>
    </span>
  )
}

export default ReturnStatement;
