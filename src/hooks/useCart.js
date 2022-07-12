import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthContext from '../context/AuthContext'
import CartContext from '../context/CartContext'
import Service from '../services/cartService'

const useCart = () => {
  const navigate = useNavigate()
  const { cart, setCart } = useContext(CartContext)
  const { isLogged } = useContext(AuthContext)

  const add = async ({ id_prod, qty }) => {
    try {
      const result = await Service.add({ id_prod, qty })

      result.success && setCart(result.data.cart)

      return result.success
    } catch (error) {
      console.error(error)
    }
  }

  const getCart = async () => {
    const result = await Service.getCart()

    result.success && setCart(result.data.cart)
  }

  const getTotalItems = () => cart.reduce((a, b) => a + b.qty, 0)

  const handleCartIconClick = () => (isLogged ? navigate('/cart') : navigate('/login'))

  return {
    add,
    getCart,
    getTotalItems,
    handleCartIconClick,
  }
}

export default useCart
