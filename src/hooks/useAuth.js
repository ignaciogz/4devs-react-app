import { useContext } from 'react'

import AuthContext from '../context/AuthContext'
import UserContext from '../context/UserContext'
import Service from '../services/authService'

import useUser from './useUser'

const useAuth = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext)
  const { setUser, userDataLoaded, setUserDataLoaded } = useContext(UserContext)
  const { isAdmin, getUserData } = useUser()

  const loginUserNow = async () => {
    await getUserData()
    setUserDataLoaded(true)
    setIsLogged(true)
  }

  const logout = () => {
    setUser(null)
    setUserDataLoaded(false)
    setIsLogged(false)
  }

  const checkLoggedIn = async () => {
    const result = await Service.checkLoggedIn()

    if (result.success) {
      if (!result.data.isLogged) {
        logout()

        return false
      }

      if (result.data.isLogged && !userDataLoaded) {
        await loginUserNow()
      }

      return true
    }
  }

  const login = async ({ username, password }) => {
    try {
      const result = await Service.login({ username, password })

      if (result.success) {
        await loginUserNow()
      }

      return result.success
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isAuthAdmin: Boolean(isLogged && isAdmin),
    isLogged: Boolean(isLogged),
    checkLoggedIn,
    login,
    logout,
  }
}

export default useAuth
