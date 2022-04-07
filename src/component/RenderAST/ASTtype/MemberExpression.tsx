import ChooseType from "../ChooseType";

function MemberExpression(props:any){
  const data= props.data;
  // console.log(data)
  return (
    <span>
      <span>
      <ChooseType info={data.object} />
      </span>
      <span>.</span>
      <span>
      <ChooseType info={data.property} />
      </span>
    </span>
  )
}

export default MemberExpression;
