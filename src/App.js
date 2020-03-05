import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Register from './components/Register';
import Login from "./components/Login";
import Landing from "./components/Landing";
import Game from "./components/Game";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/game" component={Game} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      </div>
    </div>
  );
}

export default App;