import React, { useEffect } from 'react'
import Login from './components/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import useAuth from './store/useAuth';
import Dashboard from './pages/Dashboard';

const App = () => {
  const { isAuth } = useAuth()
  
  return (
    <Routes>
      <Route path='/' element={isAuth ? <Navigate to={'/dashboard'} /> : <Login />} />
      <Route path='/dashboard' element={!isAuth ? <Navigate to={'/'} /> : <Dashboard />} />
    </Routes>
  )
}

export default App