
import { LOAD_POSTS, FILTER_POSTS, ORDER_BY } from '../actions'

const initialState = {
  posts: [],
  selectedCategory: "all",
  order: "VoteScore"
}

function posts(state = initialState, action){
  
  const { posts, category, order } = action

  switch(action.type)
  {
    case LOAD_POSTS:
      return { ...state, posts: posts }
    case FILTER_POSTS:
      return { ...state, selectedCategory: category }
    case ORDER_BY:
      return {...state, order: order}

    default:
      return state
  }

}

export default posts