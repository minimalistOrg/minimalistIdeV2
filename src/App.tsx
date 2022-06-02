import { Provider } from "react-redux";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic"
import store from "./component/Root-file/Redux/store";

import Root from "./component/Root-file/Root";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

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
