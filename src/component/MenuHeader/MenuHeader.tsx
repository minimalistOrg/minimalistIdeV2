import Dropdown from "rc-dropdown";
import style from "./MenuHeader.module.css";
import "rc-dropdown/assets/index.css";

interface MenuHeaderType {
  fn: { gist: () => void };
}

function MenuHeader(props: MenuHeaderType) {
  // console.log(props)
  const menuFile = (
    <ul className={style.DropdownMenu}>
      <li className={style.item} onClick={() => props.fn.gist()}>
        <button>
        <div className={style.textContainer}>
        <span className={style.text}>Load Code</span>
        </div>
        </button>
      </li>
    </ul>
  );

  return (
    <div className={style.MenuHeader}>
      <ul className={style.ul}>
        <li>
          <Dropdown overlay={menuFile} trigger={["click"]}>
            <button data-test-id="MenuHeader__btn" className={style.btn}>File</button>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default MenuHeader;
