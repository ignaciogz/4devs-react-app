import { useState } from 'react'

import Service from '../services/categoryService'

const useCategories = () => {
  const [categories, setCategories] = useState([])

  const getAllCategories = async () => {
    try {
      const result = await Service.getAll()
      const categoriesToShow = result.data.categories

      setCategories(categoriesToShow)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    categories,
    getAllCategories,
  }
}

export default useCategories
