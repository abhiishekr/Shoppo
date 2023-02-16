import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'


function AuthRoute() {
  return (
    <Routes >
      <Route path="/" exact element={<Register/>} />
    </Routes>
  )
}

export default AuthRoute