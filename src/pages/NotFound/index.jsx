import React from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Error404 from '../../components/Error404'
import Footer from '../../components/Footer'

const NotFound = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Error404 />
      <Footer />
    </div>
  )
}

export default NotFound
