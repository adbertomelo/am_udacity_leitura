
const AUTHORIZATION = "whatever-you-want"

export function fetchCategories () {
  
  return fetch('http://localhost:3001/categories', { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}


export function fetchPosts () {
  
  return fetch('http://localhost:3001/posts', { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}