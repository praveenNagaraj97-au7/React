import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import { login } from "../actions";

const loginAPI = (email, password) =>
  axios.post("http://localhost:8080/api/v1/signin", {
    email,
    password,
  });

function* handleLogin() {
  const response = yield call(loginAPI, "praveen@mailsac.com", "123");
  yield put(login(response.data));
}

export function* loginUser() {
  yield takeEvery("LOAD_LOAGIN", handleLogin);
}
