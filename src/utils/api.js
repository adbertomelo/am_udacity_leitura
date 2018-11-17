
const AUTHORIZATION = "whatever-you-want"

const HOST = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': AUTHORIZATION
}

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

  return fetch(`${HOST}/posts/${postId}`, { headers: { ...headers  }})
    .then((res) => res.json())
}

export function fetchComments(postId) {

  return fetch(`${HOST}/posts/${postId}/comments`, { headers: {...headers}})
    .then((res) => res.json())
}

export const updatePost = (post) =>
  fetch(`${HOST}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

  export const newPost = (post) =>
  fetch(`${HOST}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

  export function votePost (id, valueVote) {

    return fetch(`${HOST}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            option: valueVote,
        })
    }).then((res) => res.json())
}
