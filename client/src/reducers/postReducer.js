
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
      return {...state, data: activePosts, post:{...post, deleted: true}}
    case UP_VOTES:
    case DOWN_VOTES:
    case UPDATE_POST:
      const index = data.findIndex(p => p.id === action.post.id)
      const newPosts = Object.assign([], data, {[index]: action.post});
      return {...state, data: newPosts, post: {...post, data: action.post}}
    case GET_POST:
      return {...state, post: action.post}
    case GET_COMMENTS:
      return {...state, comments: action.comments}
    case CREATE_COMMENT:
      
      const newListPostsAfterAddComment = getPostsWithCommentCountUpdated(data, post.data, 1)
      const postDataAfterAddComment = getPostWithCommentCountUpdated(post.data, post.data.id, 1)
      const postComments = {...post, data: postDataAfterAddComment, comments:[...post.comments, action.comment]}      
      return {...state, data: newListPostsAfterAddComment, post: postComments}

    case DELETE_COMMENT:
      
      const activesComments = post.comments.filter(p => p.id !== action.commentId)
      const postDataAfterDelComment = getPostWithCommentCountUpdated(post.data, post.data.id, -1)
      const postActivesComments = {...post, data: postDataAfterDelComment, comments:activesComments}      
      const newListPostsAfterDelComment = data.map((item) => {
        return getPostWithCommentCountUpdated(item, post.data.id, -1)
      })

      return {...state, data: newListPostsAfterDelComment, post: postActivesComments}

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

  function getPostsWithCommentCountUpdated(listPosts, currentPost, value)
  {
    const idx = listPosts.findIndex(p => p.id === currentPost.id)
    let post = listPosts[idx]
    post.commentCount += value
    const posts = Object.assign([], listPosts, {[idx]: post})
    return posts
  }

  function getPostWithCommentCountUpdated(post, currPostId, value)
  {
    if (post.id === currPostId)
      post.commentCount += value

      return post
  }

}

export default posts