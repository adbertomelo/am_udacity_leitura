import { DELETE_COMMENT } from '../actions/CommentsActions'

function comments(state = {}, action){

  switch(action.type)
  {
    case DELETE_COMMENT:
      return {...state}
    default:
      return state
  }

}

export default comments