import React from 'react';
import { Counter } from './features/counter/Counter';
import {Person} from './features/person/person';
import './App.css';
import Display from './features/display/display';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="topnav">
          <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/person">Person</Link>
          <Link to="/display">Display Patient</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/person">
            <Person />
          </Route>
          <Route path="/display">
            <Display />
          </Route>
          <Route path="/">
            <h1>Welcome to the Home page...</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
