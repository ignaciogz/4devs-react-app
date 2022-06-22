import * as React from 'react'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import './styles.scss'

const SocialNetwork = () => {
  return (
    <Box className="social-networks" component="section">
      <FacebookIcon fontSize="large" />
      <TwitterIcon fontSize="large" />
      <InstagramIcon fontSize="large" />
    </Box>
  )
}

export default SocialNetwork
