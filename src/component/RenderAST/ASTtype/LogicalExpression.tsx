import ChooseType from "../ChooseType"

function LogicalExpression(props:any){

 const data = props.data.left;
  const data2 = props.data.right;

  return (
 <>
      <span>
        ( <ChooseType info={data} />
      </span>
      <span> {props.data.operator} </span>
      <span>
        <ChooseType info={data2} /> )
      </span>
    </>

  )
}

export default LogicalExpression;
