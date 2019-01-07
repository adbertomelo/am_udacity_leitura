import * as api from '../utils/api'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function getAllCategoriesAction(categories) {

  return {
    type: LOAD_CATEGORIES,
    categories
  }
}


export function getAllCategories() {

  return (dispatch) => {

    api.getAllCategories().then(
      (res) => {
        dispatch(getAllCategoriesAction(res.categories))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

