import { combineReducers } from 'redux'

import posts from './postReducer'
import categories from './categoriesReducer'
import comments from './commentsReducer'

export default combineReducers ({
  posts,
  categories,
  comments
})