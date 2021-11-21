import { ADD_FAVORITE, REMOVE_FAVORITE, SELECT_SORT_ORDER } from "./types";

const initialState = {
  items: [],
  order: null,
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      const { item } = action.payload;
      return {
        ...state,
        items: [...state.items, item],
      };
    case REMOVE_FAVORITE:
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((el) => el.hotelId !== id),
      };
    case SELECT_SORT_ORDER:
      const { order } = action.payload;
      return { ...state, order };
    default:
      return state;
  }
}
