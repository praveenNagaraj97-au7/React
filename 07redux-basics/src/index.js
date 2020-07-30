import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <React.Fragment>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
