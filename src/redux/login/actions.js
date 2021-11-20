import { CHANGE_LOGIN_FIELD, LOGIN_USER, LOGOUT_USER } from "./types";

export function changeLoginField(name, value) {
  return { type: CHANGE_LOGIN_FIELD, payload: { name, value } };
}

export function loginUser(user) {
  return { type: LOGIN_USER, payload: { user } };
}

export function logoutUser() {
  return { type: LOGOUT_USER };
}
