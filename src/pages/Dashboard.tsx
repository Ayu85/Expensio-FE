import React from 'react'
import useAuth from '../store/useAuth'

const Dashboard = () => {
  const {authUser}=useAuth()
  console.log(authUser);
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard