import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Summer from './Pages/Summer'
import Description from './Pages/Description'
import Cart from './Pages/Cart'
import PrivatePage from './Components/PrivatePage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/summer" element={
        <PrivatePage>
          <Summer />
        </PrivatePage>} />
      <Route path="/description/:id" element={
        <PrivatePage>
          <Description />
        </PrivatePage>
      } />

      <Route path="/cart" element={
        <PrivatePage>
          <Cart />
        </PrivatePage>
      } />
    </Routes>
  )
}

export default AllRoutes