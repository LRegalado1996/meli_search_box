import { Router, Route, Switch } from "react-router-dom";
import history from "./services/history";
import { Home } from "./pages";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/items" component={ Home } />
        <Route path="/" component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
