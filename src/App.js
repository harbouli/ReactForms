import { Fragment } from 'react';
import './css/App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Fragment>
        <Register />
    </Fragment>
  );
}

export default App;
