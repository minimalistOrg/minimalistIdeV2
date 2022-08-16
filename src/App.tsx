import { Provider } from "react-redux"
import { positions, Provider as AlertProvider } from "react-alert"
import store from "./components/Root-file/Redux/store"

import { Root } from "./components/Root-file/Root"
import { AlertTemplate } from "./components/AlertTemplate/AlertTemplate"

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
}

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Root />
      </AlertProvider>
    </Provider>
  )
}

export default App
