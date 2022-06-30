import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import PersonIcon from '@mui/icons-material/PersonOutline'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/LogoutRounded'

import Cart from '../Cart'

import './styles.scss'

const pages = [
  { text: 'Home', href: '/', type: 'router' },
  { text: 'About Us', href: '#about-us', type: 'anchor' },
  { text: 'Contact Us', href: '/', type: 'router' },
]

const settings = [
  { text: 'Admin', icon: AdminPanelSettingsIcon },
  { text: 'Profile', icon: ManageAccountsIcon },
  { text: 'Logout', icon: LogoutIcon },
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const GetMenuLink = ({ page }) => {
    const styles = { my: 2, color: 'white', display: 'block' }

    switch (page.type) {
      case 'anchor':
        return (
          <Button component="a" href={page.href} sx={styles} onClick={handleCloseNavMenu}>
            {page.text}
          </Button>
        )
      case 'router':
        return (
          <Button component={Link} sx={styles} to={page.href} onClick={handleCloseNavMenu}>
            {page.text}
          </Button>
        )
    }
  }

  const GetMobileMenuLink = ({ page }) => {
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

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Russo One',
              fontSize: '2rem',
              fontWeight: 400,
              letterSpacing: '.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            variant="h6"
          >
            4DEVS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              size="large"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              id="menu-appbar"
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <GetMobileMenuLink className="prueba" page={page} />
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Russo One',
              fontSize: '2rem',
              fontWeight: 400,
              letterSpacing: '.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            variant="h5"
          >
            4DEVS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <GetMenuLink key={index} page={page} />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton aria-label="show new notifications" color="inherit" size="large">
              <Cart itemsQty={2} />
            </IconButton>
            <IconButton aria-label="show new notifications" color="inherit" size="large">
              <PersonIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              keepMounted
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              id="menu-appbar"
              open={Boolean(anchorElUser)}
              sx={{ mt: '45px' }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Box component={setting.icon} />
                  <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
