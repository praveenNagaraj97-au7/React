import { combineReducers } from "redux";

import brewReducer from "./breweryReducer";

export default combineReducers({
  brew: brewReducer,
});
