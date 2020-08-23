import { combineReducers } from "redux";
import googleAuthReducer from "./googleAuthReducer";
import { reducer as reduxReducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  gAuth: googleAuthReducer,
  stream: streamReducer,
  form: reduxReducer,
});
