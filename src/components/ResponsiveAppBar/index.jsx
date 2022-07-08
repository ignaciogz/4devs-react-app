import * as React from 'react'
import { useState } from 'react'
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
import MenuBtnLink from '../MenuLink/MenuBtnLink'
import MobileMenuTextLink from '../MenuLink/MobileMenuTextLink'
import useLogin from '../../hooks/useLogin'
import useUser from '../../hooks/useUser'

import './styles.scss'

const ResponsiveAppBar = () => {
  const { isLogged } = useLogin()
  const { user, isAdmin } = useUser()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const pages = [
    {
      text: 'Home',
      href: '/',
      type: 'router',
      handlers: {
        click: handleCloseNavMenu,
      },
    },
    {
      text: 'About Us',
      href: '#about-us',
      type: 'anchor',
      handlers: {
        click: handleCloseNavMenu,
      },
    },
    {
      text: 'Contact Us',
      href: '/',
      type: 'router',
      handlers: {
        click: handleCloseNavMenu,
      },
    },
  ]

  const settings = [
    { text: 'Admin', icon: AdminPanelSettingsIcon },
    { text: 'Profile', icon: ManageAccountsIcon },
    { text: 'Logout', icon: LogoutIcon },
  ]

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
                  <MobileMenuTextLink page={page} />
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
              <MenuBtnLink key={index} page={page} />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              aria-label="show shopping cart"
              color="inherit"
              component={Link}
              size="large"
              to="/cart"
            >
              <Cart itemsQty={2} />
            </IconButton>
            {isLogged ? (
              <Tooltip title="Open settings">
                <IconButton
                  aria-label="open user settings"
                  sx={{ p: 0 }}
                  onClick={handleOpenUserMenu}
                >
                  <Avatar alt={user.name} src={`http://localhost:8080/img/avatars/${user.img}`} />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton
                aria-label="go to login page"
                color="inherit"
                component={Link}
                size="large"
                to="/login"
              >
                <PersonIcon />
              </IconButton>
            )}

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
              {isLogged &&
                settings.map((setting, index) => (
                  <Box key={index}>
                    {!isAdmin && setting.text === 'Admin' ? (
                      false
                    ) : (
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Box component={setting.icon} />
                        <Typography textAlign="center">{setting.text}</Typography>
                      </MenuItem>
                    )}
                  </Box>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
