import { IMAGES } from "../constants";

const { LOAD_SUCCESS } = IMAGES;

const nextReducer = (state = 1, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

export default nextReducer;
