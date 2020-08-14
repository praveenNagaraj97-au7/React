import { takeEvery, select, call, put } from "redux-saga/effects";

import { IMAGES } from "../constants";
import { getphotosAPI } from "../api";
import { setError, setImages } from "../actions";

const { LOAD } = IMAGES;

const getPage = (state) => state.nextPage;

// Worker
function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(getphotosAPI, "India", page);
    yield put(setImages(images));
  } catch (err) {
    yield put(setError(err));
  }
}

// Watcher
export default function* watchLoadImages() {
  yield takeEvery(LOAD, handleImagesLoad);
}
// watcherSaga listens to actions and call worker saga.
