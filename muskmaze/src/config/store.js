//contains code that initializes react redux store
import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
//javascript object has keys with values and they are stored states
//key is how you access stored state
const rootReducer = combineReducers({
    player: playerReducer, //get player key value is whatever reducer returns
})

const store = createStore(
    rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
//allows browser to inspect the redux store as app is being built

export default store