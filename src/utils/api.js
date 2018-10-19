
const AUTHORIZATION = "whatever-you-want"

export function fetchCategories () {
  
  return fetch('http://localhost:3001/categories', { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}


export function fetchPostsByCategorie (categorie) {
  
  let parteUrl = ""

  if (categorie === "all" || categorie === "")
    parteUrl = 'posts'
  else
    parteUrl = `${categorie}/posts`

  return fetch('http://localhost:3001/' + parteUrl, { headers: { 'Authorization': AUTHORIZATION  }})
    .then((res) => res.json())
}