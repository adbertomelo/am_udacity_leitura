import { LOAD_CATEGORIES } from '../actions/CategoriesActions'


export default function categories(state={}, action){
 
  switch(action.type)
  {
    case LOAD_CATEGORIES:
      return {...state, data:action.categories}
    default:
      return state
  }

}

