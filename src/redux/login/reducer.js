import { LOGIN_FIELD_CHANGE, LOGIN_USER, LOGOUT_USER } from "./types";

const initialState = {
  login: "",
  password: "",
  user: JSON.parse(localStorage.getItem("user")),
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FIELD_CHANGE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case LOGIN_USER:
      const { user } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      return { ...state, login: "", password: "", user };
    case LOGOUT_USER:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
}
