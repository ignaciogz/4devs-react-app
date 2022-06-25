import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'
import ShoppingCart from '../pages/ShoppingCart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Success from '../pages/Success'
import NotFound from '../pages/NotFound'
import Admin from '../pages/Admin'

import ScrollToTop from './ScrollToTop'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Product />} path="/product/:id" />
          <Route element={<ShoppingCart />} path="/cart" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Success />} path="/success" />
          <Route element={<NotFound />} path="/404" />
          <Route element={<Admin />} path="/cpanel" />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default AppRouter
