import {
  HOTEL_LIST_FAILURE,
  HOTEL_LIST_OPTIONS,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
} from "./types";

export function hotelListRequest() {
  return { type: HOTEL_LIST_REQUEST };
}

export function hotelListSuccess(data) {
  return { type: HOTEL_LIST_SUCCESS, payload: { data } };
}

export function hotelListFailure(error) {
  return { type: HOTEL_LIST_FAILURE, payload: { error } };
}

export function hotelListOptions(options) {
  return { type: HOTEL_LIST_OPTIONS, payload: { options } };
}
