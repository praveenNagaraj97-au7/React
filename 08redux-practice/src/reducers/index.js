import { combineReducers } from "redux";

import showsReducer from "./fetchShowsReducer";

export default combineReducers({ shows: showsReducer });
