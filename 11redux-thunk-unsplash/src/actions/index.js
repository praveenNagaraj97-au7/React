import { Images } from "../constants";
import { unSplashAPI } from "../api";

let error;

export const fetchImages = (term) => async (dispatch) => {
  try {
    const response = await unSplashAPI(term);
    dispatch({ type: Images.IMAGE_LOAD, payload: response.data.results });
  } catch (err) {
    error = err;
  }
};

export const setError = () => {
  if (error) {
    return {
      type: Images.IMAGE_FAILURE,
      error,
    };
  }
  return {
    type: Images.IMAGE_FAILURE,
    error: "",
  };
};
