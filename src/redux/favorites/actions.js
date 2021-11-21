import { ADD_FAVORITE, REMOVE_FAVORITE, SELECT_SORT_ORDER } from "./types";

export function addFavorite(item) {
  return { type: ADD_FAVORITE, payload: { item } };
}

export function removeFavorite(id) {
  return { type: REMOVE_FAVORITE, payload: { id } };
}

export function selectSortOrder(order) {
  return { type: SELECT_SORT_ORDER, payload: { order } };
}
