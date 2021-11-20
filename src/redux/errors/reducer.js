import { REMOVE_ERROR, ADD_ERROR } from "./types";

const initialState = {
  errors: [],
};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errors: [...state.errors, action.payload.error] };
    case REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((el) => el !== action.payload.error),
      };
    default:
      return state;
  }
}
