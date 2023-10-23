import React from 'react'
const Squir = (props) => {
  return (
    <div onClick={props.onClick} className='square'>
      <h1 className='heading'>{props.value}</h1>
    </div>
  )
}

export default Squir
