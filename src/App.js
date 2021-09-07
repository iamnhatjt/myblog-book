import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DetailBook from "./component/DetailBook";
import Home from './component/Home';
import ShowList from './component/ShowList';
import Trainding from './component/Traingding';
import TrendingMonth from './component/TrendMonth';

function App() {

  return (
    <Router>
      <div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trending">
            <TrendingMonth />
          </Route>
          <Route path="/:title">
            <DetailBook  />
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
