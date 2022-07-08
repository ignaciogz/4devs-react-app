import RequestService from './requestService'

class UserService {
  static API_URL = import.meta.env.VITE_API_URL

  static async get() {
    try {
      return await RequestService.GET(`${UserService.API_URL}/users`)
    } catch (err) {
      console.log(err)
    }
  }
}

export default UserService
