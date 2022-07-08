import { useContext } from 'react'

import UserContext from '../context/UserContext'
import Service from '../services/loginService'

const useLogin = () => {
  const { user, setUser } = useContext(UserContext)

  const login = async ({ username, password }) => {
    try {
      const result = await Service.login({ username, password })

      return result.success
    } catch (error) {
      console.error(error)
    }
  }

  const initUserSession = () => {
    setUser({ logged: true })
  }

  const logout = () => {
    setUser({ logged: false })
  }

  return {
    isLogged: Boolean(user.logged),
    initUserSession,
    login,
    logout,
  }
}

export default useLogin
