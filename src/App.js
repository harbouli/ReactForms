import { Fragment } from 'react';
import './css/App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from './pages/Home'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Singup" component={Register} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
