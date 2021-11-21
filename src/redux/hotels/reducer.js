import {
  HOTEL_LIST_FAILURE,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
  HOTEL_LIST_OPTIONS,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  data: [],
  options: null,
};

export default function hotelListReducer(state = initialState, action) {
  switch (action.type) {
    case HOTEL_LIST_REQUEST:
      return { ...state, loading: true, error: null, data: [] };
    case HOTEL_LIST_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, data: [], error };
    case HOTEL_LIST_SUCCESS:
      const { data } = action.payload;
      return { ...state, loading: false, error: null, data };
    case HOTEL_LIST_OPTIONS:
      const { options } = action.payload;
      return { ...state, options };
    default:
      return state;
  }
}
