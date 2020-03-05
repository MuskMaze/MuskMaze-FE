import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import Main from './components/Main/Main'
import PrivateRoute from './components/utils/PrivateRoute'
import Viewport from './components/Viewport/Viewport'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Register from './components/Register';
import Login from "./components/Login";
import Landing from "./components/Landing";
import Game from "./components/Game";
// import Navs from "./components/Navs";
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeIcon from '@material-ui/icons/Home';



function App(props) {
  console.log('props in app', props)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className="App-header">
        {/* <Navs/> */}
      {/* <HomeIcon style={{ fontSize: 52, color: 'dimgrey' }} /> */}
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
