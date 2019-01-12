
import { GET_POST, LOAD_POSTS, FILTER_POSTS, ORDER_BY, 
  DELETE_POST, UP_VOTES, DOWN_VOTES, CREATE_POST, GET_COMMENTS, UPDATE_POST } from '../actions/PostActions'

import { CREATE_COMMENT, DELETE_COMMENT, UP_VOTES_COMMENT, DOWN_VOTES_COMMENT, UPDATE_COMMENT } from '../actions/CommentsActions'

function posts(state = {}, action){

  const {data, post} = state

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
      return {...state, data:[...data, action.post]}
    case DELETE_POST:
      let activePosts= data.filter(p => p.id !== action.id)
      return {...state, data: activePosts}
    case UP_VOTES:
    case DOWN_VOTES:
    case UPDATE_POST:
      const index = data.findIndex(p => p.id === action.post.id)
      const newPosts = Object.assign([], data, {[index]: action.post});
      return {...state, data: newPosts, post: {...post, data: action.post}}
    case GET_POST:
      //console.log({act:action})
      return {...state, post: action.post}
    case GET_COMMENTS:
      return {...state, comments: action.comments}
    case CREATE_COMMENT:
      //refatorar essa garrancheira...
      const index2 = data.findIndex(p => p.id === post.data.id)
      const pp = data[index2]
      pp.commentCount+=1
      const posts2 = Object.assign([], data, {[index2]: pp});
      const postComments = {...post, comments:[...post.comments, action.comment]}      
      return {...state, data: posts2, post: postComments}
    case DELETE_COMMENT:
      //refatorar essa garrancheira...
      const activeComments = post.comments.filter(p => p.id !== action.commentId)
      const postActivesComments = {...post, comments:activeComments}      
      return {...state, post: postActivesComments}
    case UP_VOTES_COMMENT:
    case DOWN_VOTES_COMMENT:
    case UPDATE_COMMENT:    
      const idxComment = post.comments.findIndex(p => p.id === action.comment.id)
      const newComments = Object.assign([], post.comments, {[idxComment]: action.comment});
      const postNewComments = {...post, comments:newComments}            
      return {...state, post: postNewComments}

    default:
      return state
  }

}

export default posts