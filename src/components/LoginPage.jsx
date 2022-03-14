import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginFieldChange, loginUser } from "../redux/login/actions";
import { addError } from "../redux/errors/actions";
import { validateLogin, validatePassword } from "../functions/validators";
import "../styles/LoginPage.css";

function LoginPage(props) {
  const { login, password } = useSelector((state) => state.login);
  const { errors } = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeField = (event) => {
    dispatch(loginFieldChange(event.target.name, event.target.value));
  };

  const loginApp = (event) => {
    event.preventDefault();
    const isLoginValid = validateLogin(login);
    const isPasswordValid = validatePassword(password);
    if (!isLoginValid) {
      dispatch(addError("login"));
    }
    if (!isPasswordValid) {
      dispatch(addError("password"));
    }
    if (isLoginValid && isPasswordValid) {
      dispatch(loginUser({ login, password }));
      history.push("/app");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <form className="login__form" onSubmit={loginApp}>
            <h1 className="login__title">Simple Hotel Check</h1>
            <div
              className={`login__formfield ${
                errors.includes("login") ? "login__formfield--error" : ""
              }`}
            >
              <label className="login__input-title" htmlFor="login">
                Логин
              </label>
              <input
                className="login__input"
                id="login"
                type="text"
                name="login"
                autoComplete="username"
                value={login}
                onChange={changeField}
              />
              <p className="login__message">Введите корректный email</p>
            </div>
            <div
              className={`login__formfield ${
                errors.includes("password") ? "login__formfield--error" : ""
              }`}
            >
              <label className="login__input-title" htmlFor="password">
                Пароль
              </label>
              <input
                className="login__input"
                id="password"
                type="password"
                autoComplete="current-password"
                name="password"
                value={password}
                onChange={changeField}
              />
              <p className="login__message">
                Введите минимум 8 символов, без кириллицы
              </p>
            </div>
            <button className="login__btn">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
