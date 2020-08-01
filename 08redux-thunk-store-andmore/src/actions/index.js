import jsonPlaceHolderApi from "../api/jsonPlaceHolderApi";
import _ from "lodash";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => {
    dispatch(fetchUsers(id));
  });
};

const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolderApi.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

const fetchUsers = (id) => async (dispatch) => {
  const response = await jsonPlaceHolderApi.get(`/users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
};
