import { takeEvery, put } from "redux-saga/effects";

import { Reciepe } from "../constants";
import { photosAPI } from "../api";

const { GET_PHOTOS } = Reciepe;

export function* fetchReciepeAsync() {
  try {
    const response = yield photosAPI.get();
    console.log(response);
    yield put({ type: GET_PHOTOS });
  } catch (err) {
    console.log(err);
  }
}

export function* fetchReciepesStart() {
  yield takeEvery(GET_PHOTOS, fetchReciepeAsync);
}
