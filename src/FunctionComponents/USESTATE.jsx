import React from 'react'
import { useState } from 'react'

const USESTATE = () => {
    const [display, setDisplay]= useState('hello Class')

 const HandleChnage =()=>{
     if(display === 'hello Class'){
        setDisplay('Welcome Class')

     }else{
        setDisplay('hello everyone')
     }
 }

  return (
    <div>
        USESTATE
        <h1 >{display} </h1>
        <button onClick={HandleChnage} >click me</button>
    </div>
  )
}

export default USESTATE
