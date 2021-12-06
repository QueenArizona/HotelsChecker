import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AppPage from "./components/AppPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={AppPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
