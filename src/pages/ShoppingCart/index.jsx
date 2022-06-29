import React from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import CartDetails from '../../components/CartDetails'
import Footer from '../../components/Footer'

const ShoppingCart = () => {
  return (
    <>
      <ResponsiveAppBar />
      <CartDetails />
      <Footer />
    </>
  )
}

export default ShoppingCart
