import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from './components/Register';
import Login from "./components/Login";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MuskMaze</h1>
        <h3>Multipi User Dangeon Game </h3>
      </header>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
