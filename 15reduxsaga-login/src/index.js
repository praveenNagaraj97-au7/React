import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddlware from "redux-saga";

import App from "./component/App";
import reducers from "./reducers";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddlware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
