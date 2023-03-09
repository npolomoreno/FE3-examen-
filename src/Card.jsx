import React from 'react'

const Card = ({libro, pelicula}) => {
  return (
    <div>
        <h3>{libro} es un gran libro ! </h3>
        <h3>La película {pelicula}, es una gran elección  </h3>
        
    </div>
  )
}

export default Card