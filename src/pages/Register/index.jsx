import React from 'react'

import '../../App.scss'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import UserRegister from '../../components/UserRegister'
import Footer from '../../components/Footer'

const Register = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <UserRegister />
      <Footer />
    </div>
  )
}

export default Register
