import { LOGIN_FIELD_CHANGE, LOGIN_USER, LOGOUT_USER } from "./types";

export function loginFieldChange(name, value) {
  return { type: LOGIN_FIELD_CHANGE, payload: { name, value } };
}

export function loginUser(user) {
  return { type: LOGIN_USER, payload: { user } };
}

export function logoutUser() {
  return { type: LOGOUT_USER };
}
