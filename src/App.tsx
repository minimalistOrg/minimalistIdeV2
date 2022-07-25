import { Provider } from "react-redux";
import { positions, Provider as AlertProvider } from "react-alert";
import styleAlert from "./component/Root-file/root.module.css";
import store from "./component/Root-file/Redux/store";

import Root from "./component/Root-file/Root";
import IcoClose from "./Icons/IcoClose";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const AlertTemplate = ({ style, options, message, close }: any) => (
  <div className={styleAlert.alert}>
    <div className={styleAlert.ContainerMsg}>
      <span>
        {options.type === "info" && "!"}
        {options.type === "success" && ":)"}
        {options.type === "error" && ":("}
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
        <>
          <Root />
          {/*AlertTemplate({
            style: { position: "fixed" },
            options: { type: "success" },
            message: "hello",
          })*/}
        </>
      </AlertProvider>
    </Provider>
  );
}

export default App;
