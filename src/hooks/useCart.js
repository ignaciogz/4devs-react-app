import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthContext from '../context/AuthContext'
import CartContext from '../context/CartContext'
import Service from '../services/cartService'

const useCart = () => {
  const navigate = useNavigate()
  const { cart, setCart } = useContext(CartContext)
  const { isLogged } = useContext(AuthContext)

  const addCartItem = async ({ id_prod, qty }) => {
    try {
      const result = await Service.add({ id_prod, qty })

      if (result.success) {
        const cartUpdated = [...cart]
        const itemIndex = cart.findIndex((element) => element.product.id == id_prod)

        if (itemIndex !== -1) {
          let itemToUpdate = cart[itemIndex]

          itemToUpdate.qty += qty

          cartUpdated.splice(itemIndex, 1, itemToUpdate)
        } else {
          const item = {
            id: id_prod,
            qty,
          }

          cartUpdated.push(item)
        }

        setCart(cartUpdated)
      }

      return result.success
    } catch (error) {
      console.error(error)
    }
  }

  const getCart = async () => {
    const result = await Service.getCart()

    result.success && setCart(result.data.cart)

    return result.success
  }

  const getTotalItems = () => cart.reduce((a, b) => a + b.qty, 0)

  const removeCartItem = async (id_prod) => {
    try {
      const result = await Service.remove(id_prod)

      if (result.success) {
        const cartModified = [...cart]
        const itemIndex = cart.findIndex((element) => element.product.id == id_prod)

        cartModified.splice(itemIndex, 1)

        setCart(cartModified)
      }

      return result.success
    } catch (error) {
      console.error(error)
    }
  }

  const handleCartIconClick = () => (isLogged ? navigate('/cart') : navigate('/login'))

  return {
    cart,
    addCartItem,
    getCart,
    getTotalItems,
    handleCartIconClick,
    removeCartItem,
  }
}

export default useCart
