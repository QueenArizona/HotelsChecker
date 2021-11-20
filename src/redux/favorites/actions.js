import { ADD_FAVORITE, REMOVE_FAVORITE, SELECT_SORTING } from "./types";

export function addFavorite(item) {
  return { type: ADD_FAVORITE, payload: { item } };
}

export function removeFavorite(id) {
  return { type: REMOVE_FAVORITE, payload: { id } };
}

export function selectSorting(order) {
  return { type: SELECT_SORTING, payload: { order } };
}
