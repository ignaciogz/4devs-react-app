class UserService {
  static async get() {
    try {
      const res = await fetch('http://localhost:8080/api/users')
      const data = await res.json()

      return data
    } catch (err) {
      console.log(err)
    }
  }
}

export default UserService
