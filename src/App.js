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
import MyContextProvider from './context/MyContext';

function App() {
  return (
    <MyContextProvider>
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Singup" component={Register} />
        </Switch>
      </Router>
    </Fragment>
    </MyContextProvider>
  );
}

export default App;
