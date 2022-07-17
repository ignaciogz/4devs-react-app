import RequestService from './requestService'

class CategoryService {
  static API_URL = `${import.meta.env.VITE_API_URL}/categories`

  static async getAll() {
    try {
      return await RequestService.GET(`${CategoryService.API_URL}`)
    } catch (err) {
      console.log(err)
    }
  }
}

export default CategoryService
