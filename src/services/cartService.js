import RequestService from './requestService'

class CartService {
  static API_URL = `${import.meta.env.VITE_API_URL}/cart`

  static async getCart() {
    try {
      return await RequestService.GET(`${CartService.API_URL}`)
    } catch (err) {
      console.log(err)
    }
  }

  static async add({ id_prod, qty }) {
    try {
      const data = {
        id_prod,
        qty,
      }

      return await RequestService.POST(`${CartService.API_URL}`, data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default CartService
