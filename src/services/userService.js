import RequestService from './requestService'

class UserService {
  static API_URL = `${import.meta.env.VITE_API_URL}/users`

  static async getUserLogged() {
    try {
      return await RequestService.GET(`${UserService.API_URL}`)
    } catch (err) {
      console.log(err)
    }
  }

  static async checkUserExist({ email }) {
    try {
      const data = {
        email,
      }

      return await RequestService.POST(`${UserService.API_URL}/check`, data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default UserService
