import React from 'react'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Slider from '../../components/Slider'
import Commitments from '../../components/Commitments'
import Store from '../../components/Store'
import Footer from '../../components/Footer'

import '../../App.scss'

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Slider />
      <Commitments />
      <Store />
      <Footer />
    </div>
  )
}

export default Home
