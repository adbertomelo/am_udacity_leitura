
import { LOAD_POSTS, FILTER_POSTS, ORDER_BY, DELETE_POST, UP_VOTES, DOWN_VOTES } from '../actions'


const initialState = {
  posts: [],
  selectedCategory: "all",
  order: "VoteScore"
}

function posts(state = initialState, action){
  
  let { posts } = state
  let foundIndex = -1;

  switch(action.type)
  {
    case LOAD_POSTS:
      return { ...state, posts: action.posts }
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
      return {...state, voteScore: action.post.voteScore}
    case DOWN_VOTES:
      foundIndex = posts.findIndex(p => p.id === action.post.id)
      posts[foundIndex] = action.post
      return {...state}


    default:
      return state
  }

}

export default posts