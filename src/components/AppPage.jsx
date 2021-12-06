import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../redux/login/actions";
import Sidebar from "./Sidebar";
import Main from "./Main";

function AppPage(props) {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [history, user]);

  const handleLogout = (event) => {
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <div className="container">
      <div className="app">
        <header className="app__header">
          <h2 className="app__title">Simple Hotel Check</h2>
          <button className="app__logout-btn" onClick={handleLogout}>
            Выйти
          </button>
        </header>
        <div className="wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default AppPage;
