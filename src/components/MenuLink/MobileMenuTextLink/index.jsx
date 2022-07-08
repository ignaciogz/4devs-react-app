import * as React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

const MobileMenuTextLink = ({ page }) => {
  switch (page.type) {
    case 'anchor':
      return (
        <Typography component="a" href={page.href} textAlign="center">
          {page.text}
        </Typography>
      )
    case 'router':
      return (
        <Typography component={Link} textAlign="center" to={page.href}>
          {page.text}
        </Typography>
      )
  }
}

export default MobileMenuTextLink
