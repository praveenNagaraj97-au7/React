import { Google_SignIn, Google_SignOut } from "../actions/types";

const INITIAL = {
  isSignedIn: null,
  userId: null,
  userDetails: {},
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case Google_SignIn:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.details.OU,
        userDetails: action.payload.details,
      };
    case Google_SignOut:
      return {
        ...state,
        isSignedIn: false,
        userId: action.payload.details,
        userDetails: action.payload.details,
      };
    default:
      return state;
  }
};
