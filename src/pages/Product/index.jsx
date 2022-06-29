import React from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import ProductDetails from '../../components/ProductDetails'
import Footer from '../../components/Footer'

const Product = () => {
  return (
    <>
      <ResponsiveAppBar />
      <ProductDetails />
      <Footer />
    </>
  )
}

export default Product
