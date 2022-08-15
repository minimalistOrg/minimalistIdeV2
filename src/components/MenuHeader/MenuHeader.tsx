import Dropdown from "rc-dropdown";
import style from "./MenuHeader.module.css";
import "rc-dropdown/assets/index.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

interface MenuHeaderType {
  fn: { gist: () => void };
}

function MenuHeader(props: MenuHeaderType) {
  const valid_token: string = useSelector(
    (state: { jwt: { key: string } }) => state.jwt.key
  );


  const api_url: string = useSelector(
    (state: { jwt: { url_api: string } }) => state.jwt.url_api
  );

  const dataLogin = {
    url: `${api_url}/api/v1/github/auth`,
    text: "Login with Github",
  };

  const dataLogout = {
    url: `${api_url}/api/v1/github/logout`,
    text: "Logout",
  };
  const [login, setLogin] = useState(dataLogin);

  useEffect(() => {
    if (valid_token === "") {
      setLogin(dataLogin);
    } else {
      setLogin(dataLogout);
    }
    //eslint-disable-next-line
  }, [valid_token]);
  // console.log(props)
  const menuFile = (
    <ul className={style.DropdownMenu}>
      <li className={style.item}>
        <a href={login.url} className={style.link}>
          <div className={style.textContainer}>
            <span className={style.text}>{login.text}</span>
          </div>
        </a>
      </li>
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
            <button data-test-id="MenuHeader__btn" className={style.btn}>
              File
            </button>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default MenuHeader;
