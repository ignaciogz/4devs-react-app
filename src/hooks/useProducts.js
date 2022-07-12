import { useState } from 'react'

import Service from '../services/productService'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState(null)

  const getAll = async () => {
    try {
      const result = await Service.getAll()
      const productsToShow = result.data.products

      setProducts(productsToShow)
    } catch (error) {
      console.error(error)
    }
  }

  const getID = async (id) => {
    try {
      const result = await Service.getID(id)

      if (result.success) {
        const productToShow = result.data.product

        productToShow.description = productToShow.description.split(';')

        setProduct(productToShow)
      }

      return result.success
    } catch (error) {
      console.error(error)
    }
  }

  return {
    product,
    products,
    getAll,
    getID,
  }
}

export default useProducts
