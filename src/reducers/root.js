import { combineReducers } from 'redux'
import { houses } from './houses'
import { error } from './error'
import { isLoading } from './isLoading'
const rootReducer = combineReducers({
  houses,
  error,
  isLoading
})

export default rootReducer