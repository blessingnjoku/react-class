import React, { useState, useEffect } from 'react'



const Counter = () => {
const [count, setCount]= useState(0)

// const increment=()=>{
  

// }
useEffect(()=>{
    setTimeout(()=>{
        setCount(count + 1)
    }, 5000)
},[])

// useEffect(()=>{
// if(count === 3){
//     alert('Hello Class')
// }


// }, [count]);


  return (
    <div>
        <h1>Counter</h1>
        <h2 >{count}</h2>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        <button onClick={()=>setCount(count - 1)}>Decrease</button>

    </div>
  )
}

export default Counter