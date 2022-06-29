import React from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import UserRegister from '../../components/UserRegister'
import Footer from '../../components/Footer'

const Register = () => {
  return (
    <>
      <ResponsiveAppBar />
      <UserRegister />
      <Footer />
    </>
  )
}

export default Register
