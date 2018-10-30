
const AUTHORIZATION = "whatever-you-want"

const HOST = "http://localhost:3001"

export function fetchCategories () {
  
  return fetch(HOST + '/categories', { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}


export function fetchAllPosts() {
  

  return fetch(HOST + '/posts', { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}

export function fetchPostsByCategory (category) {
  
  let parteUrl = ""

  if (category === "all" || category === "")
    parteUrl = '/posts'
  else
    parteUrl = `/${category}/posts`

  return fetch(HOST + parteUrl, { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}

export function fetchPostById(postId) {

  return fetch(HOST + '/posts/' + postId, { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}

export function fetchComments(postId) {

  return fetch(HOST + '/posts/' + postId + "/comments", { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}