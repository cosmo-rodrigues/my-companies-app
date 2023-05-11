import ReactDOM from "react-dom";
import App from "./App.tsx";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.ts";
import { UserThemeProvider } from "./context/Theme/index.tsx";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <UserThemeProvider>
        <App />
      </UserThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
