
import { LOAD_CATEGORIES } from '../actions'


const initialCategoriesState = {
  categories: []
}

function categories(state = initialCategoriesState, action){
  
  switch(action.type)
  {
    case LOAD_CATEGORIES:

      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }

  

}

export default categories