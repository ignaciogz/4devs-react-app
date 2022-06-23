import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import './styles.scss'

const UserRegister = () => {
  return (
    <Box
      noValidate
      autoComplete="off"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  )
}

export default UserRegister
