
import { LOAD_POSTS, FILTER_POSTS, ORDER_BY, DELETE_POST, UP_VOTES, DOWN_VOTES, LOAD_CATEGORIES } from '../actions'


const initialState = {
  posts: [],
  categories: [],
  order: "VoteScore"
}

function posts(state = initialState, action){
  
  let { posts } = state
  let foundIndex = -1;

  switch(action.type)
  {
    case LOAD_POSTS:
      return { ...state, posts: action.posts }
    case LOAD_CATEGORIES:
      return { ...state, categories: action.categories }
    case FILTER_POSTS:
      return { ...state, selectedCategory: action.category }
    case ORDER_BY:
      return {...state, order: action.order}
    case DELETE_POST:
      let filteredPosts= posts.filter(p => p.id !== action.id)
      return {...state, posts: filteredPosts}
    case UP_VOTES:
      foundIndex = posts.findIndex(p => p.id === action.post.id)
      posts[foundIndex] = action.post
      return {...state, posts: posts}
    case DOWN_VOTES:
      foundIndex = posts.findIndex(p => p.id === action.post.id)
      posts[foundIndex] = action.post
      return {...state, posts: posts}


    default:
      return state
  }

}

export default posts