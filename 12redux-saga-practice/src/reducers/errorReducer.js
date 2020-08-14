import { IMAGES } from "../constants";

const { LOAD_SUCCESS, LOAD_FAILURE, LOAD } = IMAGES;

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case LOAD_FAILURE:
      return action.error;
    case LOAD:
    case LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
