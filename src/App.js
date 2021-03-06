
import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import Main from './components/Main/Main'
import Viewport from './components/Viewport/Viewport'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import Register from './components/Register'
import Login from "./components/Login"
import Landing from "./components/Landing"
import { Provider } from 'react-redux'
import roomReducer from './components/reducers/roomReducer'
import Navs from "./components/Navs"
import 'bootstrap/dist/css/bootstrap.min.css'
// import HomeIcon from '@material-ui/icons/Home';
import { createStore } from 'redux'
const store= createStore(roomReducer)
function App(props) {
  console.log('props in app', props)
  const dispatch = useDispatch()



  return (

    <div className="App">
      <Navs />
      <div className="App-header">
       

      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route path="/game" component={Game} /> */}
        <Route exact path='/viewport' render={props => <Viewport />} />
        <Route exact path='/home' render={props => <Main {...props} />} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      </div>
    </div>

  );
}
export default App;
