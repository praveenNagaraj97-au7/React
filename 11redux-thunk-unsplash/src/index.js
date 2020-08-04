import React, { Fragment } from "react";
import { render } from "react-dom/index";
import { Provider } from "react-redux";

import App from "./components/App";
import { configStore } from "./store";

const store = configStore();

render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>,
  document.querySelector("#root")
);
