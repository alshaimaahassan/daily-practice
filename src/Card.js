import React from 'react'

 const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </div>
  )
}
export default Card