import { SEARCH_FIELD_CHANGE, SEARCH_FIELD_CLEAR } from "./types";

const initialState = {
  location: "",
  date: "",
  count: "",
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FIELD_CHANGE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case SEARCH_FIELD_CLEAR:
      return initialState;
    default:
      return state;
  }
}
