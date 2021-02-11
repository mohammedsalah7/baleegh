import Home from "./pages/Home";
import Lafdya from "./pages/Lafdya";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuizPage from "./pages/Quiz/QuizPage";

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
            <QuizPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
