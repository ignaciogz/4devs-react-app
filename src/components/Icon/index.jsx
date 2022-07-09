import * as React from 'react'
import Box from '@mui/material/Box'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import PersonIcon from '@mui/icons-material/PersonOutline'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/LogoutRounded'

const iconStorage = {
  AdminPanelSettingsIcon: AdminPanelSettingsIcon,
  PersonIcon: PersonIcon,
  ManageAccountsIcon: ManageAccountsIcon,
  LogoutIcon: LogoutIcon,
}

const Icon = ({ name }) => {
  return <Box component={iconStorage[name]} />
}

export default Icon
