import { combineReducers } from "redux";

import imageReducer from "./imagesReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import nextReducer from "./nextReducer";

export default combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  nextPage: nextReducer,
});
