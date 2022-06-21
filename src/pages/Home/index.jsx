import React from 'react'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Slider from '../../components/Slider'
import Commitments from '../../components/Commitments'
import Store from '../../components/Store'

import '../../App.scss'

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Slider />
      <Commitments />
      <Store />
    </div>
  )
}

export default Home
