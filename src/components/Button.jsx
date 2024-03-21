import React from 'react'

const Button = ({btnTitle,onClick}) => {
 
  return (
    <>
    <button onClick={onClick} >{btnTitle}</button>
   
  
    </>
 
  )
}

export default Button