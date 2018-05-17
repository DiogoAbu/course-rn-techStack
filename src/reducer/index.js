import { combineReducers } from 'redux'

import library from './library.reducer'
import selection from './selection.reducer'

export default combineReducers({
  library,
  selectedId: selection,
})