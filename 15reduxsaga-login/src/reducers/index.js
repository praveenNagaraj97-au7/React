import { combineReducers } from "redux";

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.response };

    default:
      return state;
  }
};

export default combineReducers({
  login: loginReducer,
});
