import RequestService from './requestService'

class CartService {
  static API_URL = `${import.meta.env.VITE_API_URL}/cart`

  static async add(id_prod) {
    try {
      const data = {
        qty: 1,
      }

      return await RequestService.POST(`${CartService.API_URL}/${id_prod}`, data)
    } catch (err) {
      console.log(err)
    }
  }

  static async getCart() {
    try {
      return await RequestService.GET(`${CartService.API_URL}`)
    } catch (err) {
      console.log(err)
    }
  }

  static async update(id_prod, qty) {
    try {
      const data = {
        qty: Number(qty),
      }

      return await RequestService.PUT(`${CartService.API_URL}/${id_prod}`, data)
    } catch (err) {
      console.log(err)
    }
  }

  static async remove(id_prod) {
    try {
      return await RequestService.DELETE(`${CartService.API_URL}/${id_prod}`, null)
    } catch (err) {
      console.log(err)
    }
  }
}

export default CartService
