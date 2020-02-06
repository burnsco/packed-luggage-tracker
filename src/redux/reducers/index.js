import { combineReducers } from 'redux'

import itemReducer from './item'

export default combineReducers({
  item: itemReducer
})
