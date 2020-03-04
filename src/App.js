import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Register from './components/Register';
import Login from "./components/Login";
import Landing from "./components/Landing";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
       <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      
    </div>
  );
}

export default App;
