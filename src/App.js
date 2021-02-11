import Home from "./pages/Home";
import Lafdya from "./pages/Lafdya";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Lafdya">
            <Lafdya />
          </Route>
          <Route exact path="/Quiz">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
