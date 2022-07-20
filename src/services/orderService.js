import RequestService from './requestService'

class OrderService {
  static API_URL = `${import.meta.env.VITE_API_URL}/orders`

  static async getID(id) {
    try {
      return await RequestService.GET(`${OrderService.API_URL}/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  static async getUserOrders() {
    try {
      return await RequestService.GET(`${OrderService.API_URL}/user/`)
    } catch (err) {
      console.log(err)
    }
  }
}

export default OrderService
