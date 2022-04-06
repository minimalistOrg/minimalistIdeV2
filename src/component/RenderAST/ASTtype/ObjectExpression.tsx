import ChooseType from "../ChooseType"

function ObjectExpression(props: any) {
  const data = props.data;
  // console.log(data);

  const open = "{ ";
  const close = " }";
  const long= data.properties.length;

  function coma(actual:number){
    if(long - 1 === actual){
      return ""
    }else{
      return " , "
    }
  }

  return (
    <>
      <span>{open}</span>
      <span>
        {data.properties.map((e: any,index:number) => {
          return (
            <span key={index}>
              <span>{e.key.name}:</span>
              <span> <ChooseType info={e.value}/></span>
              <span>{coma(index)}</span>
            </span>
          );
        })}
      </span>
      <span>{close}</span>
    </>
  );
}

export default ObjectExpression;
