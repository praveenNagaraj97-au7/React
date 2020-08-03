import { Google_SignIn, Google_SignOut } from "./types";

export const googleAuthSign_In = (details) => {
  return {
    type: Google_SignIn,
    payload: {
      details,
    },
  };
};

export const googleAuthSign_Out = (details) => {
  return {
    type: Google_SignOut,
    payload: {
      details,
    },
  };
};
