import { Provider } from "react-redux";
import { positions, Provider as AlertProvider } from "react-alert";
import styleAlert from "./component/Root-file/root.module.css";
import store from "./component/Root-file/Redux/store";

import Root from "./component/Root-file/Root";
import IcoClose from "./Icons/IcoClose";
import IconInfo from "./Icons/IconInfo";
import IconSuccess from "./Icons/IconSuccess";
import IconError from "./Icons/IconError";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const AlertTemplate = ({ style, options, message, close }: any) => (
  <div className={styleAlert.alert} style={style}>
    <div className={styleAlert.ContainerMsg}>
      <span
        className={styleAlert.icon}
        style={{ color: `var(--color-${options.type})` }}
      >
        {options.type === "info" && <IconInfo size={16} />}
        {options.type === "success" && <IconSuccess size={16} />}
        {options.type === "error" && <IconError size={16} />}
      </span>
      <span>{message}</span>
    </div>
    <button onClick={close}>
      <IcoClose size={16} />
    </button>
  </div>
);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
          <Root />
      </AlertProvider>
    </Provider>
  );
}

export default App;
