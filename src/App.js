import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AppPage from "./components/AppPage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/app" component={AppPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
