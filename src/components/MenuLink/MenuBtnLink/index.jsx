import * as React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const MenuBtnLink = ({ page }) => {
  const styles = { my: 2, color: 'white', display: 'block' }

  switch (page.type) {
    case 'anchor':
      return (
        <Button
          aria-label={`go to ${page.text}`}
          component="a"
          href={page.href}
          sx={styles}
          onClick={page.handlers.click}
        >
          {page.text}
        </Button>
      )
    case 'router':
      return (
        <Button
          aria-label={`go to ${page.text}`}
          component={Link}
          sx={styles}
          to={page.href}
          onClick={page.handlers.click}
        >
          {page.text}
        </Button>
      )
  }
}

export default MenuBtnLink
