import { useState } from 'react'

import Service from '../services/brandService'

const useBrands = () => {
  const [brands, setBrands] = useState([])

  const getAllBrands = async () => {
    try {
      const result = await Service.getAll()
      const brandsToShow = result.data.brands

      setBrands(brandsToShow)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    brands,
    getAllBrands,
  }
}

export default useBrands
