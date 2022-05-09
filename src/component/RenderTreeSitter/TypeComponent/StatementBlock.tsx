import ChooseType from "../ChooseType";

function StatementBlock(props:any){
  return <ChooseType info={props.data.children[1]} />
}

export default StatementBlock;
