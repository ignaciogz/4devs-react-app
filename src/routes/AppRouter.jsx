import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/product/:id" />
        {/* <Route element={<NotFound />} path="*" /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
