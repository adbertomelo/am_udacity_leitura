import uuidv4 from 'uuid/v4'

const AUTHORIZATION = "whatever-you-want"

const HOST = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': AUTHORIZATION
}

export function fetchCategories() {

  return fetch(HOST + '/categories', { headers: { 'Authorization': AUTHORIZATION } })
    .then((res) => res.json())
}

export function fetchAllPosts() {


  return fetch(HOST + '/posts', { headers: { 'Authorization': AUTHORIZATION } })
    .then((res) => res.json())
}

export function fetchPostsByCategory(category) {

  let parteUrl = ""

  if (category === "all" || category === "")
    parteUrl = '/posts'
  else
    parteUrl = `/${category}/posts`

  return fetch(HOST + parteUrl, { headers: { 'Authorization': AUTHORIZATION } })
    .then((res) => res.json())
}

export function fetchPostById(postId) {

  return fetch(`${HOST}/posts/${postId}`, { headers: { ...headers } })
    .then((res) => res.json())
}

export function fetchComments(postId) {

  return fetch(`${HOST}/posts/${postId}/comments`, { headers: { ...headers } })
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

export function createPost(post) {

  const newPost = {
    ...post,
    id: uuidv4(),
    timestamp: Date.now()
  }

  return fetch(`${HOST}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  }).then(res => res.json())
}

export const deletePost = (postId) =>
  fetch(`${HOST}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())

export function votePost(id, valueVote) {

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

export function voteComment(id, valueVote) {

  return fetch(`${HOST}/comments/${id}`, {
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

export function createComment(comment) {

  const newComment = {
    ...comment,
    id: uuidv4(),
    timestamp: Date.now()
  }

  return fetch(`${HOST}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  }).then(res => res.json())

}

export function fetchCommentById(commentId) {

  return fetch(`${HOST}/comments/${commentId}`, { headers: { ...headers } })
    .then((res) => res.json())
}

export const updateComment = (comment) =>
  fetch(`${HOST}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const deleteComment = (commentId) =>
  fetch(`${HOST}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
