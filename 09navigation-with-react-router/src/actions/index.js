import { Google_SignIn, Google_SignOut, STREAM } from "./types";
import streamAPI from "../api";
import history from "../history";

export const googleAuthSign_In = (details) => {
  return {
    type: Google_SignIn,
    payload: {
      details,
    },
  };
};

export const googleAuthSign_Out = (details) => {
  return {
    type: Google_SignOut,
    payload: {
      details,
    },
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streamAPI.post("/streams", formValues);

  dispatch({ type: STREAM.STREAM_CREATE, payload: response.data });

  // Programmatic Navigation
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streamAPI.get("/streams");

  dispatch({ type: STREAM.STREAM_LIST, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streamAPI.get(`/streams/${id}`);

  dispatch({ type: STREAM.STREAM_INDIVIDUAL, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streamAPI.put(`/streams${id}`, formValues);

  dispatch({ type: STREAM.STREAM_EDIT, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streamAPI.delete(`/streams${id}`);

  dispatch({ type: STREAM.STREAM_DELETE, payload: id });
};
