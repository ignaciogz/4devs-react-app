class ProductService {
  static async getAll() {
    try {
      const res = await fetch('http://localhost:8080/api/products')
      const data = await res.json()

      return data
    } catch (err) {
      console.log(err)
    }
  }

  static async get(id) {
    try {
      const res = await fetch(`http://localhost:8080/api/products/${id}`)
      const data = await res.json()

      return data
    } catch (err) {
      console.log(err)
    }
  }
}

export default ProductService
