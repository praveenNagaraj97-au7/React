import { Reciepe } from "../constants";
import { reciepeAPI } from "../api";

const { GET_RECIEPES } = Reciepe;

export const fetchReciepes = () => async (dispatch) => {
  const response = await reciepeAPI(null, "onions,garlic", "omelet").get();

  dispatch({ type: GET_RECIEPES, payload: response.data.results });
};
