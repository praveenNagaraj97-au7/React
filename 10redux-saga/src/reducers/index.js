import { combineReducers } from "redux";

import reciepeReducer from "./reciepeReducer";

export default combineReducers({
  reciepe: reciepeReducer,
});
