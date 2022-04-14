import "./highlight.css";
import ChooseType from "./ChooseType";

function RenderAST(props: any): JSX.Element {
  const data = props.ast;

  // data.forEach((e:any)=>{console.log(e)})

  return (
    <>
      {data.map((info: any, index: number) => {
        return (
          <div key={index}>
            <ChooseType info={info} />
          </div>
        );
      })}
    </>
  );
}

export default RenderAST;
