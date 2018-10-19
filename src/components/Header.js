import React from 'react';


export default function Header ({ categories, onSelect }) {
  
  return (
  
    <div>
      <span>Categorie:</span>
      <select onChange={(event) => onSelect(event.target.value)}>
        <option value="all">All</option>
        {
          categories.map((categorie) => (
            <option key={categorie.name} value={categorie.name}>{categorie.name}</option>
            ))  
        }
      </select>
    </div>

    )
}

