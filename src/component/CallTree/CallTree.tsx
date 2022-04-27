import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CallTree.css";

function CallTree() {
  const dataBubbleTree = useSelector((state:any) => state.callTree.value);

  useEffect(() => {
    console.table(dataBubbleTree);
  // eslint-disable-next-line
  }, []);

  return (
    <section className="CallTree" onClick={()=>{console.table(dataBubbleTree)}}>
      <ul>
        <li>
          main
          <ul>
            <li>test</li>
            <li>
              test2
              <ul>
                <li>test</li>
              </ul>
            </li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default CallTree;
