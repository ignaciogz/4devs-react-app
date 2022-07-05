import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'
import FacebookIcon from '@mui/icons-material/FacebookRounded'

import useNotificator from '../../hooks/useNotificator'
import Notificator from '../Notificator'

import './styles.scss'

const UserLogin = () => {
  let navigate = useNavigate()
  const { isOpen, severity, text, openNotificator, closeNotificator, setNotificator } =
    useNotificator()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    })
    const dataJSON = await res.json()

    if (dataJSON.success) {
      openNotificator()
      setNotificator('success', 'You will be redirected in 5 seconds...')
      setTimeout(() => {
        closeNotificator()
        navigate(`/`)
      }, 5000)
    } else {
      openNotificator()
      setNotificator('error', 'Invalid user or password.')
    }
  }

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
            method="post"
            role="form"
            sx={{
              '& > :not(style)': { m: 1.2, width: '30ch' },
            }}
            onSubmit={handleSubmit}
          >
            <TextField required label="Email" name="email" type="email" variant="standard" />
            <TextField
              required
              label="Password"
              name="password"
              type="password"
              variant="standard"
            />
            <Button size="large" type="submit" variant="contained">
              <LoginIcon />
              LOG IN
            </Button>
            <Box component="div">
              Do not have an account yet? <Link to="/register">Sign Up</Link>
            </Box>
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
      {isOpen && (
        <Notificator
          closeNotificator={closeNotificator}
          isOpen={isOpen}
          severity={severity}
          text={text}
        />
      )}
    </Box>
  )
}

export default UserLogin
