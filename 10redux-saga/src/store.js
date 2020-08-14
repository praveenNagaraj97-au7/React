import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import { fetchReciepesStart } from "./sagas";

const sagaMiddlware = createSagaMiddleware();

const middlewares = [thunk, logger, sagaMiddlware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddlware.run(fetchReciepesStart);

export default store;
