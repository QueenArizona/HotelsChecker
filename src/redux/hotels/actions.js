import {
  HOTELS_LIST_FAILURE,
  HOTELS_LIST_OPTIONS,
  HOTELS_LIST_REQUEST,
  HOTELS_LIST_SUCCESS,
} from "./types";

export function hotelsListRequest() {
  return { type: HOTELS_LIST_REQUEST };
}

export function hotelsListSuccess(data) {
  return { type: HOTELS_LIST_SUCCESS, payload: { data } };
}

export function hotelsListFailure(error) {
  return { type: HOTELS_LIST_FAILURE, payload: { error } };
}

export function hotelsListOptions(options) {
  return { type: HOTELS_LIST_OPTIONS, payload: { options } };
}
