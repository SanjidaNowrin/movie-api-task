import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import MovieSummary from "./components/Movies/MovieSummary/MovieSummary";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Movies></Movies>
          </Route>
          <Route path="/movie/:id">
            <MovieSummary></MovieSummary>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
