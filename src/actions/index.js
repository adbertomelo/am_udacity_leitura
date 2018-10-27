export const LOAD_POSTS = 'LOAD_POSTS'
export const FILTER_POSTS = 'FILTER_POSTS'
export const ORDER_BY = 'ORDER_BY'

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
