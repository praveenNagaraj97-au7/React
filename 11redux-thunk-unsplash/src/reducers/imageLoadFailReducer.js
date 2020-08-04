import { Images } from "../constants";

export default (state = "", action) => {
  switch (action.type) {
    case Images.IMAGE_FAILURE:
      return action.error;
    default:
      return state;
  }
};
