import { useEffect, useState } from "react";
import {TreesitterData, TypeComponentProps} from "../../../types/interface";
import { ChooseType } from "../ChooseType";

function TemplateString(props: TypeComponentProps) {
  const data = props.data;
  const [stringtxt, setStringtxt] = useState<string|string[]>([]);
  useEffect(() => {
    let txt:string|string[] = data.text;
    data.children.map((e: TreesitterData, index: number) => {
      if (index > 0 && index < data.children.length - 1) {
        txt = (txt as string).replace(e.text, ",");
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
      {data.children.map((e: TreesitterData, index: number) => {
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
