import { breweries } from "../constants";

const ITITIAL_STATE = {
  breweries: [],
};

const brewReducer = (state = ITITIAL_STATE, action) => {
  switch (action.type) {
    case breweries.GET_ALL_BREWERIES:
      return {
        ...state,
        breweries: action.payload,
      };
    default:
      return state;
  }
};

export default brewReducer;
