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

  const handleChange = (event) => {
    dispatch(loginFieldChange(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
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
    <div className="layout">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login-title">Simple Hotel Check</h1>
        <div
          className={`login-form-field ${
            errors.includes("login") ? "error-form-field" : ""
          }`}
        >
          <label className="login-input-title" htmlFor="login">
            Логин
          </label>
          <input
            className="login-input"
            id="login"
            type="text"
            name="login"
            autoComplete="username"
            value={login}
            onChange={handleChange}
          />
          <p className="login-message">Введите корректный email</p>
        </div>
        <div
          className={`login-form-field ${
            errors.includes("password") ? "error-form-field" : ""
          }`}
        >
          <label className="login-input-title" htmlFor="password">
            Пароль
          </label>
          <input
            className="login-input"
            id="password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <p className="login-message">
            Введите минимум 8 символов, без кириллицы
          </p>
        </div>
        <button className="login-button">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
