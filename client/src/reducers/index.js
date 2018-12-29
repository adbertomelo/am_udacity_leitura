
import { GET_POST, LOAD_POSTS, FILTER_POSTS, ORDER_BY, 
  DELETE_POST, UP_VOTES, DOWN_VOTES, LOAD_CATEGORIES, CREATE_POST } from '../actions'


const initialState = {
  posts: [],
  categories: [],
  order: "VoteScore"
}

function posts(state = initialState, action){
  
  let { posts } = state
  
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
    case CREATE_POST:
      const post = action.post
      posts.push(post)
      return {...state, posts }
    case DELETE_POST:
      let activePosts= posts.filter(p => p.id !== action.id)
      return {...state, posts: activePosts}
    case UP_VOTES:
    case DOWN_VOTES:
      const index = posts.findIndex(p => p.id === action.post.id)
      const newPosts = Object.assign([], posts, {[index]: action.post});
      return {...state, posts: newPosts, post: action.post}
    case GET_POST:
      return {...state, post: action.post}
    default:
      return state
  }

}

export default posts