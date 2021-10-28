import { Fragment } from 'react';
import './css/App.css';
import Login from './components/Login'
import Register from './components/Register'
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
