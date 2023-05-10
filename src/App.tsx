import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";

import { history } from "./helpers/history";

import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <>
      <GlobalStyle />
      <HistoryRouter history={history as any}>
        <AppRoutes />
      </HistoryRouter>
    </>
  );
}

export default App;
