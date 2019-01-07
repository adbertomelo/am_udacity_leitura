import { combineReducers } from 'redux'

import posts from './postReducer'
import categories from './categoriesReducer'

export default combineReducers ({
  posts,
  categories
})