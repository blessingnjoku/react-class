import React from 'react'
import { useParams } from 'react-router-dom'


const Employees = () => {
  const {id} = useParams()
  
  return (
    <div>Employees  Page - ID: {id}</div>
  )
}

export default Employees