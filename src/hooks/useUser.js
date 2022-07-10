import { useContext } from 'react'

import UserContext from '../context/UserContext'
import Service from '../services/userService'

const useUser = () => {
  const { user, setUser } = useContext(UserContext)

  const getUserData = async () => {
    await Service.get().then((result) => {
      result.success && setUser({ ...result.data.user })
    })
  }

  return {
    user,
    isAdmin: Boolean(user && user.role === 'ADMIN'),
    getUserData,
  }
}

export default useUser
