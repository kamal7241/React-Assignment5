import { combineReducers } from 'redux'
 import studentReducer from './student-Reducer'

 console.log('index of reducers')
 // (combinereducers) return reducer method call as an object in state
export default combineReducers({studentReducer});
    
