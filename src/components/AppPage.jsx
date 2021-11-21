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

  const handleClick = (event) => {
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <div className="app">
      <header className="app-header">
        <h2 className="app-title">Simple Hotel Check</h2>
        <button className="logout-button" onClick={handleClick}>
          Выйти
        </button>
      </header>
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default AppPage;
