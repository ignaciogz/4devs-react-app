import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'
import FacebookIcon from '@mui/icons-material/FacebookRounded'

import './styles.scss'

const UserLogin = () => {
  return (
    <Box className="login" component="section">
      <Grid container spacing={0}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <h1>My Account</h1>
          <Box
            noValidate
            autoComplete="off"
            component="form"
            sx={{
              '& > :not(style)': { m: 1.2, width: '30ch' },
            }}
          >
            <TextField required label="Email" variant="standard" />
            <TextField required label="Password" type="password" variant="standard" />
            <Button size="large" variant="contained">
              <LoginIcon />
              LOGIN
            </Button>
          </Box>
          <Divider className="divider">
            <Chip label="Or" />
          </Divider>
          <Button className="loginFacebookBtn" size="large" variant="contained">
            <FacebookIcon />
            FACEBOOK
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserLogin
