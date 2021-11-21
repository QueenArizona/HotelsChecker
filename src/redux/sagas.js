import { put, spawn, debounce } from "redux-saga/effects";
import { LOGIN_FIELD_CHANGE } from "./login/types";
import { SEARCH_FIELD_CHANGE } from "./search/types";
import { removeError } from "./errors/actions";

function filterChangeFieldsSaga({ type }) {
  return type === SEARCH_FIELD_CHANGE || type === LOGIN_FIELD_CHANGE;
}

function* handleChangeFieldsSaga(action) {
  yield put(removeError(action.payload.name));
}

function* watchChangeFieldsSaga() {
  yield debounce(1000, filterChangeFieldsSaga, handleChangeFieldsSaga);
}

export default function* saga() {
  yield spawn(watchChangeFieldsSaga);
}
