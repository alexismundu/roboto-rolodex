import React from 'react';
import './card.styles.css';

function Card({ monster }) {
  return (
    <div className='card-container'>
      <img alt={`monster-${monster.id}`} src={`https://robohash.org/${monster.id}?size=180x180&set=set1`}></img>
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

export default Card
