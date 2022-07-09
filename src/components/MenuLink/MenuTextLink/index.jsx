import * as React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

import Icon from '../../Icon'

const getIcon = (iconObj) => {
  return iconObj ? <Icon name={iconObj} /> : null
}

const MenuTextLink = ({ link }) => {
  const styles = { my: 1, color: 'black', display: 'flex' }

  switch (link.type) {
    case 'anchor':
      return (
        <Typography component="a" href={link.href} sx={styles} textAlign="center">
          {getIcon(link.icon)}
          {link.text}
        </Typography>
      )
    case 'router':
      return (
        <Typography component={Link} sx={styles} textAlign="center" to={link.href}>
          {getIcon(link.icon)}
          {link.text}
        </Typography>
      )
  }
}

export default MenuTextLink
