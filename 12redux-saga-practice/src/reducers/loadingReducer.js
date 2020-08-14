import { IMAGES } from "../constants";

const { LOAD_FAILURE, LOAD } = IMAGES;

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOAD:
      return true;
    case LOAD_FAILURE:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
