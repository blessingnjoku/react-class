import React, { useEffect } from 'react'
import { useState } from 'react'

const WindowSize = () => {
    const [WindowVlaue, setWindowValue] = useState(0)


    const handleChang =()=>{
        setWindowValue(window.innerWidth)

    }



    useEffect(()=>{
        console.log('Hey Everyone')

        window.addEventListener('resize', handleChang )
        console.log('Hey')


    })

  return (
    <div>
        <h1> WindowSize</h1>

        <h2>{WindowVlaue}</h2>
       


    </div>
  )
}

export default WindowSize