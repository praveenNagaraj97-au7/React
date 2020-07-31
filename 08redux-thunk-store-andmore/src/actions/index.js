import jsonPlaceHolderApi from "../api/jsonPlaceHolderApi";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolderApi.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = (id) => async (dispatch) => {
  const response = await jsonPlaceHolderApi.get(`/users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
};
