import { IMAGES } from "../constants";

const { LOAD_SUCCESS } = IMAGES;

const imageReducer = (state = [], action) => {
  if (action.type === LOAD_SUCCESS) {
    return { ...state, ...action.images };
  }
  return state;
};

export default imageReducer;
