import ChooseType from "../ChooseType";
import TemplateElement from "./TemplateElement";

function TemplateLiteral(props: any) {
  const data = props.data;
  // console.log(data);

  function Expression(index: number) {
    const long = data.quasis.length;
    let point = index + 1;
    if (point < long) {
      const result = (
        <span>
          <span className="ast-interpolation">{"${"}</span>
          <ChooseType info={data.expressions[index]} />
          <span className="ast-interpolation">{"}"}</span>
        </span>
      );
      return result;
    } else {
      return "";
    }
  }

  return (
    <>
      <span>
        `
        {data.quasis.map((e: any, index: number) => {
          return (
            <span key={index}>
              <TemplateElement data={e} />
              {Expression(index)}
            </span>
          );
        })}
        `
      </span>
    </>
  );
}

export default TemplateLiteral;
