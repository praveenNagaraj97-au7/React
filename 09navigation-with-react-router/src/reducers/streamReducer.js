import { STREAM } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case STREAM.STREAM_CREATE:
      //Key-Interpolation
      return { ...state, [action.payload.id]: action.payload };

    case STREAM.STREAM_INDIVIDUAL:
      return { ...state, [action.payload.id]: action.payload };

    case STREAM.STREAM_EDIT:
      return { ...state, [action.payload.id]: action.payload };

    case STREAM.STREAM_DELETE:
      return _.omit(state, action.payload);

    case STREAM.STREAM_LIST:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};
