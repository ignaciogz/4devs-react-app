import React from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import OrderSuccess from '../../components/OrderSuccess'
import Footer from '../../components/Footer'

const Success = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <OrderSuccess />
      <Footer />
    </div>
  )
}

export default Success
