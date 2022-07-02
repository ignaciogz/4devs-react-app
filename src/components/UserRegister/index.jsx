import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

import './styles.scss'

const Input = styled('input')({
  display: 'none',
})

const UserRegister = () => {
  let navigate = useNavigate()
  const [emailExist, setEmailExist] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)

    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: 'POST',
      body: formData,
    })
    const dataJSON = await res.json()

    console.log('ENVIADO !', dataJSON.success)
    if (dataJSON.success) navigate(`/`)
  }

  const handleKeyUp = async (event) => {
    let value = event.target.value

    if (value.length > 5) {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: value,
        }),
      })
      const dataJSON = await res.json()

      console.log(`${value}`, dataJSON.data.user.exist)
      setEmailExist(dataJSON.data.user.exist)
    } else {
      setEmailExist(false)
    }
  }

  return (
    <Box className="register" component="section">
      <Grid container spacing={0}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <h1>Create Account</h1>
          <Box
            noValidate
            action="http://localhost:8080/api/auth/register"
            autoComplete="off"
            component="form"
            encType="multipart/form-data"
            method="post"
            role="form"
            sx={{
              '& > :not(style)': { m: 1.2, width: '30ch' },
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              required
              error={emailExist}
              helperText={emailExist ? 'email already exists' : null}
              label="Email"
              minLength="5"
              name="username"
              type="email"
              variant="standard"
              onKeyUp={handleKeyUp}
            />
            <TextField required label="Name" name="name" variant="standard" />
            <TextField
              required
              label="Password"
              minLength="5"
              name="password"
              type="password"
              variant="standard"
            />
            <label htmlFor="Avatar">
              <Input
                required
                accept="image/gif, image/png, image/jpeg"
                id="Avatar"
                name="avatar"
                type="file"
              />
              <Button className="formBtn" component="span" variant="contained">
                <PhotoCamera />
                Upload Avatar
              </Button>
              <span>*required</span>
            </label>
            <Button className="formBtn" size="large" type="submit" variant="contained">
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
