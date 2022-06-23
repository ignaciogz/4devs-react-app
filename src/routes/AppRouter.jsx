import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'
import ShoppingCart from '../pages/ShoppingCart'
import Register from '../pages/Register'

import ScrollToTop from './ScrollToTop'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Product />} path="/product/:id" />
          <Route element={<ShoppingCart />} path="/cart" />
          <Route element={<Register />} path="/register" />
          {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default AppRouter
