import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'

import ScrollToTop from './ScrollToTop'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Product />} path="/product/:id" />
          {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default AppRouter
