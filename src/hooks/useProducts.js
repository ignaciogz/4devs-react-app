import { useState } from 'react'

import Service from '../services/productService'

const useProducts = () => {
  const [products, setProducts] = useState([])

  const getAll = async () => {
    try {
      const result = await Service.getAll()
      const productsToShow = result.data.products

      setProducts(productsToShow)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    products,
    getAll,
  }
}

export default useProducts
