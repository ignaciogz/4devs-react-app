import React from 'react'

import '../../App.scss'

import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Footer from '../../components/Footer'
import Store from '../../components/Store'
import Commitments from '../../components/Commitments'
import Slider from '../../components/Slider'
import ScrollTo from '../../components/ScrollTo'

const Home = (props) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Slider />
      <Commitments />
      <Store />
      <Footer />
      <ScrollTo {...props}>
        <Fab aria-label="scroll back to top" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTo>
    </div>
  )
}

export default Home
