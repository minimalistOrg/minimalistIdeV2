import { useEffect, useState } from "react";
import ChooseType from "../ChooseType";

function TemplateString(props: any) {
  const data = props.data;
  const [stringtxt, setStringtxt] = useState([]);
  useEffect(() => {
    let txt = data.text;
    data.children.map((e: any, index: number) => {
      if (index > 0 && index < data.children.length - 1) {
        txt = txt.replace(e.text, ",");
      }
      return true
    });

    txt = txt.substring(1, txt.length - 1);
    txt = txt.split(",");
    setStringtxt(txt);
    //eslint-disable-next-line
  }, []);

  return (
    <span className="TemplateString">
      {data.children.map((e: any, index: number) => {
        return (
          <span key={index}>
            <>
              <ChooseType info={e} />
              <span>{stringtxt[index]}</span>
            </>
          </span>
        );
      })}
    </span>
  );
}

export default TemplateString;
