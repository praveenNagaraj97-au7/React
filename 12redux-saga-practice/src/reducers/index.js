import { combineReducers } from "redux";

import imageReducer from "./imagesReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
});
