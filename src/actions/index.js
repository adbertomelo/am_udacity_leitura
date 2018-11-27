export const LOAD_POSTS = 'LOAD_POSTS'
export const FILTER_POSTS = 'FILTER_POSTS'
export const ORDER_BY = 'ORDER_BY'
export const DELETE_POST = 'DELETE_POST'
export const UP_VOTES = 'UP_VOTES'
export const DOWN_VOTES = 'DOWN_VOTES'

export function loadPosts({posts}){
  
  return{
    type: LOAD_POSTS,
    posts
  }
}

export function filterPosts({category}){
  
  return{
    type: FILTER_POSTS,
    category
  }
}

export function orderBy({order}){
  
  return{
    type: ORDER_BY,
    order
  }
}

export function removeDeletedPost({id}){
  
  return{
    type: DELETE_POST,
    id
  }
}

export function updateUpVote({post}){
  
  return{
    type: UP_VOTES,
    post
  }
}

export function updateDownVote({post}){
  
  return{
    type: DOWN_VOTES,
    post
  }
}

