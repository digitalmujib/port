import React from 'react'

const Cards = (props) => {
  return (
    <div className='card-container'>
        <img src={props.url} alt={props.tile}/>
        <h2 className='card-name'>{props.name}</h2>
    </div>
  )
}

export default Cards