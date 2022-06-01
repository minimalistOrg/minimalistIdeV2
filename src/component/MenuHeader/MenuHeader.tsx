import Dropdown from "rc-dropdown";
import "./MenuHeader.css";
import "rc-dropdown/assets/index.css";

function MenuHeader(props: any) {
  const menuFile = (
    <ul className="Dropdown-Menu">
      <li className="Dropdown-Menu__item">
        <button onClick={() => props.fn.gist()}>Load Code</button>
      </li>
    </ul>
  );

  return (
    <div className="MenuHeader">
      <ul>
        <li>
          <Dropdown overlay={menuFile} trigger={["click"]} animation="slide-up">
            <button className="MenuHeader__btn">File</button>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default MenuHeader;
