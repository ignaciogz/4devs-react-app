import React from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import UserLogin from '../../components/UserLogin'
import Footer from '../../components/Footer'

const Login = () => {
  return (
    <>
      <ResponsiveAppBar />
      <UserLogin />
      <Footer />
    </>
  )
}

export default Login
