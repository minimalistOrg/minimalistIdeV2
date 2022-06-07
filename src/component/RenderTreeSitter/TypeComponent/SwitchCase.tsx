import ChooseType from "../ChooseType";

function SwitchCase(props: any) {
  const data = props.data;
  // console.log(data);

  return (
    <div className="SwitchCase">
      {data.children.map((e: any, index: number) => {
        return (
          <span key={index}>
            <ChooseType info={e} />
          </span>
        );
      })}
    </div>
  );
}

export default SwitchCase;
