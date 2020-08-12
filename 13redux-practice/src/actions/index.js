import { breweries } from "../constants";
import breweriesAPI from "../api/breweriesAPI";

export const fetchBreweries = () => async (dispatch) => {
  const response = await breweriesAPI.get();

  dispatch({ type: breweries.GET_ALL_BREWERIES, payload: response.data });
};
