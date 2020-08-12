import { createStore, applyMiddleware, compose } from "redux";
import reduxLogger from "redux-logger";
import reducThunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [reducThunk, reduxLogger];

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);
