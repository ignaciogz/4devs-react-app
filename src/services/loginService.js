import RequestService from './requestService'

class LoginService {
  static API_URL = `${import.meta.env.VITE_API_URL}/auth`

  static async login({ username, password }) {
    try {
      const data = {
        email: username,
        password,
      }

      return await RequestService.POST(`${LoginService.API_URL}/login`, data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default LoginService
