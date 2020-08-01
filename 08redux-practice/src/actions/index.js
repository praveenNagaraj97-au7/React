import tvMazeAPI from "../api/tvMaze";

export const fetchShows = (searchKeyword) => async (dispatch) => {
  const response = await tvMazeAPI(searchKeyword);
  dispatch({ type: "FETCH_SHOWS", payload: response.data });
};
