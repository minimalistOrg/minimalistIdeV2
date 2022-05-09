import ChooseType from "../ChooseType";

function StatementBlock(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <div>
      {data.children.map((e: any, index: number) => {
        return (
          <div key={index}>
            <ChooseType info={e} />
          </div>
        );
      })}
    </div>
  );
}

export default StatementBlock;
