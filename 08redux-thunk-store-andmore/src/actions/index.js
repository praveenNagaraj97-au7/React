import jsonPlaceHolderApi from "../api/jsonPlaceHolderApi";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolderApi.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
