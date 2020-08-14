import { Reciepe } from "../constants";

const { GET_RECIEPES } = Reciepe;

const INITIALSTATE = {
  reciepes: [],
};

const reciepeReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GET_RECIEPES:
      return { ...state, reciepes: action.payload };
    default:
      return state;
  }
};

export default reciepeReducer;
