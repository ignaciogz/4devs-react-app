import React from 'react'

import '../../App.scss'

import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Footer from '../../components/Footer'
import StoreContainer from '../../components/StoreContainer'
import Commitments from '../../components/Commitments'
import Slider from '../../components/Slider'
import ScrollTo from '../../components/ScrollTo'

const Home = (props) => {
  return (
    <>
      <ResponsiveAppBar />
      <Slider />
      <Commitments />
      <StoreContainer />
      <Footer />
      <ScrollTo {...props}>
        <Fab aria-label="scroll back to top" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTo>
    </>
  )
}

export default Home
