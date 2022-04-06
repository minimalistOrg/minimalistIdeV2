import ChooseType from "../ChooseType"

function ArrayExpression(props:any){

  const data= props.data;
  // console.log(data)

  const long= data.elements.length;

  function coma(actual:number){
    if(long - 1 === actual){
      return ""
    }else{
      return " , "
    }
  }


  return (
    <>
      <span>[ </span>
    <span>{
      data.elements.map((element:any,index:number)=>{
        return (
          <span key={index}>
<span><ChooseType info={element}/></span>
            <span>{coma(index)}</span>
          </span>
        ) 
      })
    }</span>
      <span> ]</span>
    </>
  )
}

export default ArrayExpression;
