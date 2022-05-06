import { Provider } from "react-redux";
import store from "./component/Root-file/Redux/store";

import Root from "./component/Root-file/Root";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
