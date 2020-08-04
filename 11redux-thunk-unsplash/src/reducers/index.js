import { combineReducers } from "redux";
import imageLoadReducer from "./imageLoadReducer";
import imageLoadFailReducer from "./imageLoadFailReducer";

export default combineReducers({
  images: imageLoadReducer,
  error: imageLoadFailReducer,
});
