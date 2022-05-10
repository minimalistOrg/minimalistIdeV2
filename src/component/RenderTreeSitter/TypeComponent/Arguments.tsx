import ChooseType from "../ChooseType";

function Arguments(props:any){
  const data= props.data;
  // console.log(data.children)

  return (
    <span className="Arguments">{
      data.children.map((e:any,index:number)=>{
        return (
          <span key={index}>
            <ChooseType info={e} />
          </span>
        )
      })
    }</span>
  )
}

export default Arguments;
