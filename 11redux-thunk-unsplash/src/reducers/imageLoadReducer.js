import { Images } from "../constants";

const imageLoadReducer = (state = [], action) => {
  switch (action.type) {
    case Images.IMAGE_LOAD:
      return action.payload;
    default:
      return state;
  }
};

export default imageLoadReducer;
