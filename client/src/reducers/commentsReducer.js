import { CREATE_COMMENT } from '../actions/PostActions'


function comments(state = {}, action){

  console.log(state.comments)
  
  switch(action.type)
  {
    case CREATE_COMMENT:
      return {...state}
    default:
      return state
  }

}

export default comments