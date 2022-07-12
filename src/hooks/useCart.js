import { useContext } from 'react'

import CartContext from '../context/CartContext'
import Service from '../services/cartService'

const useCart = () => {
  const { setCart } = useContext(CartContext)

  const add = async ({ id_prod, qty }) => {
    try {
      const result = await Service.add({ id_prod, qty })

      if (result.success) {
        setCart(result.data.cart)
      }

      return result.success
    } catch (error) {
      console.error(error)
    }
  }

  return {
    add,
  }
}

export default useCart
