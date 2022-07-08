import { useContext } from 'react'

import UserContext from '../context/UserContext'
//import Service from '../services/userService'

const useUser = () => {
  const { user } = useContext(UserContext)

  return {
    isAdmin: Boolean(user.role === 'ADMIN'),
    user,
  }
}

export default useUser
