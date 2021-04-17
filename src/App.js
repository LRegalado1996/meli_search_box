import { Router, Route, Switch } from "react-router-dom";
import history from "./services/history";
import { Items } from "./pages";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/items" component={ Items } />
        <Route path="/" component={ Items } />
      </Switch>
    </Router>
  );
}

export default App;
