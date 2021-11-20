import { CHANGE_LOGIN_FIELD, LOGIN_USER, LOGOUT_USER } from "./types";

const initialState = {
  login: "",
  password: "",
  user: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case LOGIN_USER:
      const { user } = action.payload;
      return { ...state, login: "", password: "", user };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}
