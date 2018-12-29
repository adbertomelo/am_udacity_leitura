import * as api from '../utils/api'

export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_POST = 'LOAD_POST'
export const FILTER_POSTS = 'FILTER_POSTS'
export const ORDER_BY = 'ORDER_BY'
export const DELETE_POST = 'DELETE_POST'
export const UP_VOTES = 'UP_VOTES'
export const DOWN_VOTES = 'DOWN_VOTES'
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const CREATE_POST = 'CREATE_POST'
export const GET_POST = 'GET_POST'

export function getPostAction(post) {

  return {
    type: GET_POST,
    post
  }
}

export function getPost(postId) {

  return (dispatch) => {

    api.getPost(postId).then(
      (res) => {
        dispatch(getPostAction(res))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function createPostAction(post) {

  return {
    type: CREATE_POST,
    post
  }
}

export function createPost(post) {

  return (dispatch) => {

    api.createPost(post).then(
      (res) => {
        dispatch(createPostAction(res))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function deletePostAction(id) {

  return {
    type: DELETE_POST,
    id
  }
}

export function deletePost(id) {

  return (dispatch) => {

    api.deletePost(id).then(
      () => {
        dispatch(deletePostAction(id))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function getAllPostsAction(posts) {

  return {
    type: LOAD_POSTS,
    posts
  }
}

export function getAllPosts() {

  return (dispatch) => {

    api.getAllPosts().then(
      (posts) => {
        dispatch(getAllPostsAction(posts))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function getAllCategoriesAction(categories) {
  console.log(categories)
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

export function filterPosts({ category }) {

  return {
    type: FILTER_POSTS,
    category
  }
}

export function orderBy({ order }) {

  return {
    type: ORDER_BY,
    order
  }
}


export function addVotePostAction({ post }) {

  return {
    type: UP_VOTES,
    post
  }
}

export function addVotePost(postId) {

  return (dispatch) => {
    
    api.addVotePost(postId).then((result) => {

      dispatch(addVotePostAction({ post: result }))

    }).catch(error => {

      console.log(error);

    })
    
  }
}

export function decrVotePostAction({ post }) {

  return {
    type: DOWN_VOTES,
    post
  }
}

export function decrVotePost(postId) {

  return (dispatch) => {
    api.decrVotePost(postId).then((result) => {

      dispatch(decrVotePostAction({ post: result }))


    }).catch(error => {

      console.log(error);

    })

  }
}
