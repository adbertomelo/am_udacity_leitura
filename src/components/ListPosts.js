import React from 'react'


export default function ListPosts ({ posts }) {

  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>
          <h3>{item.text}</h3>
        </li>
      ))}
    </ul>
  )
}