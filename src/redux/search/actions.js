import { SEARCH_FIELD_CHANGE, SEARCH_FIELD_CLEAR } from "./types";

export function searchFieldChange(name, value) {
  return { type: SEARCH_FIELD_CHANGE, payload: { name, value } };
}

export function searchFieldClear() {
  return { type: SEARCH_FIELD_CLEAR };
}
