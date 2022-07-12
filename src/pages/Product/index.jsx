import React, { useEffect } from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import ProductDetails from '../../components/ProductDetails'
import Footer from '../../components/Footer'
import useAuth from '../../hooks/useAuth'

const Product = () => {
  const { checkLoggedIn } = useAuth()

  useEffect(() => {
    checkLoggedIn()
  }, [])

  return (
    <>
      <ResponsiveAppBar />
      <ProductDetails />
      <Footer />
    </>
  )
}

export default Product
