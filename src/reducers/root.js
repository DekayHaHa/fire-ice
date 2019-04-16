import { combineReducers } from 'redux'
import { houses } from './houses'
import { error } from './error'
import { loading } from './loading'
const rootReducer = combineReducers({
  houses,
  error,
  isLoading: loading
})

export default rootReducer