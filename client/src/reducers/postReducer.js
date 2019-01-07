
import { GET_POST, LOAD_POSTS, FILTER_POSTS, ORDER_BY, 
  DELETE_POST, UP_VOTES, DOWN_VOTES, CREATE_POST, GET_COMMENTS } from '../actions/PostActions'


function posts(state = {}, action){

  const {data} = state

  switch(action.type)
  {
    case LOAD_POSTS:
      const currState = { ...state, data: action.posts }
      return currState
    case FILTER_POSTS:
      return { ...state, selectedCategory: action.category }
    case ORDER_BY:
      return {...state, order: action.order}
    case CREATE_POST:
      const post = action.post
      data.push(post)
      return {...state, data, post }
    case DELETE_POST:
      let activePosts= data.filter(p => p.id !== action.id)
      return {...state, data: activePosts}
    case UP_VOTES:
    case DOWN_VOTES:
      const index = data.findIndex(p => p.id === action.post.id)
      const newPosts = Object.assign([], data, {[index]: action.post});
      return {...state, data: newPosts, post: action.post}
    case GET_POST:
      return {...state, post: action.post}
    case GET_COMMENTS:
      return {...state, comments: action.comments}
    default:
      return state
  }

}

export default posts