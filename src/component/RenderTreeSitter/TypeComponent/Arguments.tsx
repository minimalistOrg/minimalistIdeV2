import ChooseType from "../ChooseType";

function Arguments(props:any){
  const data= props.data;
  // console.log(data)

  return <ChooseType info={data.children[1]} />
}

export default Arguments;
