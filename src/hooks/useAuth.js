import useLogin from './useLogin'
import useUser from './useUser'

const useAuth = () => {
  const { isAdmin } = useUser()
  const { isLogged } = useLogin()

  return {
    isAuth: Boolean(isLogged && isAdmin),
  }
}

export default useAuth
