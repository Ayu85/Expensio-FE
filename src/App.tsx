import React, { useEffect } from 'react'
import Login from './components/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import useAuth from './store/useAuth';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/SIdebar';
import Expenses from './pages/Expenses';
import Trips from './pages/Trips';
import Settings from './pages/Settings';

const App = () => {
  const { isAuth, checkAuth } = useAuth()
  useEffect(() => {
    checkAuth()
  }, [isAuth])
  return (
    <Routes>
      <Route path='/' element={isAuth ? <Navigate to={'/dashboard'} /> : <Login />} />
      <Route path='/dashboard' element={!isAuth ? <Navigate to={'/'} /> : <Dashboard />} />
      <Route path='/expenses' element={!isAuth ? <Navigate to={'/'} /> : <Expenses   />} />
      <Route path='/trips' element={!isAuth ? <Navigate to={'/'} /> : <Trips />} />
      <Route path='/settings' element={!isAuth ? <Navigate to={'/'} /> : <Settings />} />
    </Routes>
  )
}

export default App