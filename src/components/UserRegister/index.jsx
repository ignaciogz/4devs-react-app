import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import './styles.scss'

const UserRegister = () => {
  return (
    <Box className="register" component="section">
      <Grid container spacing={0}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <h1>Create Account</h1>
          <Box
            noValidate
            autoComplete="off"
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
          >
            <TextField required label="Email" variant="standard" />
            <TextField required label="Name" variant="standard" />
            <TextField required label="Password" type="password" variant="standard" />
            <TextField required label="Thumbnail" variant="standard" />
            <Button size="large" variant="contained">
              <AppRegistrationIcon />
              SIGNUP
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserRegister
