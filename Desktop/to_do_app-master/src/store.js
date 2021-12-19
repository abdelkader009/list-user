import {createStore, combineReducers} from 'redux'
import MovieReducer from './reducer/MovieReducer'

const rootReducer=combineReducers({movies: MovieReducer})

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store