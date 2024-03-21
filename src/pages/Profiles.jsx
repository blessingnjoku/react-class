import React, { useState } from 'react'

import '../App.css'
import {UsersData} from '../components/UserData'




const Profiles = ({text, onclick, first_name,  last_name,  Email,  Hobbies }) => {
    const [Users, setUsers]= useState(UsersData)

  
  return (
    <>
           
         <h1 onClick={onclick} >{text}</h1>
       
    <div className='Container'>
        <div className='Box'>
            <h1>{first_name}</h1>
            <h1>{last_name}</h1>
            <p>{Email}</p>
            <p>{ Hobbies}</p>
        </div>

           {/* {
            Users.map((val, key)=>{
                return(
                    <div className='Box' key={key}>
                    <img src="" alt="profiles" />
                    <h1>First Name:{val.firstname}</h1>
                    <h1>Last name:{val.lastname}</h1>
                    <p>Email:{val.email}</p>
                    <p>Hobbies:{val.hobbies}</p>
                    </div>
                       
                )

            })
           } */}
  
  </div>
    </>
  )
}

export default Profiles