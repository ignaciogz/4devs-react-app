import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DeleteIcon from '@mui/icons-material/DeleteForever'

import './styles.scss'

import empty from '../../assets/img/empty.png'
import CartDetailQty from '../CartDetailQty'
import useAuth from '../../hooks/useAuth'
import useCart from '../../hooks/useCart'
import useNotificator from '../../hooks/useNotificator'
import useUtilities from '../../hooks/useUtilities'
import Notificator from '../Notificator'

const CartDetail = () => {
  const navigate = useNavigate()
  const { isLogged } = useAuth()
  const { cart, getCart, removeCartItem } = useCart()
  const { isOpen, severity, text, closeNotificator, setNotificator } = useNotificator()
  const { formatPrice } = useUtilities()
  const [loader, setLoader] = useState(true)

  // ↓ ****** START - AUTH ****** ↓
  useEffect(() => {
    !isLogged && navigate('/')
  }, [isLogged, navigate])
  // ↑ ****** END - AUTH ****** ↑

  async function getCartDetail() {
    const success = await getCart()

    success && setLoader(false)
  }

  useEffect(() => {
    getCartDetail()
  }, [])

  function subtotalCol(item) {
    return item.product.price * item.qty
  }

  function createRow(item) {
    const subtotal = subtotalCol(item)
    const product = item.product

    return {
      id: product.id,
      img: product.img,
      name: product.name,
      price: product.price,
      qty: <CartDetailQty item={item} />,
      subtotal,
    }
  }

  function createRows(cart) {
    return cart.map((item) => createRow(item))
  }

  function calculateTotal(items) {
    return items.map(({ subtotal }) => subtotal).reduce((sum, i) => sum + i, 0)
  }

  const cartRows = !loader && cart.length > 0 ? createRows(cart) : []
  const cartTotal = !loader && cart.length > 0 ? calculateTotal(cartRows) : 0

  const handleRemoveIconClick = async (event) => {
    event.preventDefault()
    const { id } = event.target.dataset

    const success = await removeCartItem(id)

    success
      ? setNotificator('warning', 'Item removed')
      : setNotificator('error', 'Remove item failed')
  }

  return (
    <Box className="cart-detail" component="section">
      {loader ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <h1>Shopping Cart</h1>
          {cartRows.length > 0 ? (
            <>
              <TableContainer component={Paper}>
                <Table aria-label="spanning table" sx={{ minWidth: 700 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Product</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell align="right">Subtotal</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartRows.map((row, index) => (
                      <TableRow key={index} className="table-content">
                        <TableCell
                          align="center"
                          component={Link}
                          size="small"
                          to={`/product/${row.id}`}
                        >
                          <img alt={`image of ${row.name}`} src={row.img} />
                        </TableCell>
                        <TableCell component={Link} to={`/product/${row.id}`}>
                          {row.name}
                        </TableCell>
                        <TableCell>{formatPrice(row.price)}</TableCell>
                        <TableCell>{row.qty}</TableCell>
                        <TableCell align="right">{formatPrice(row.subtotal)}</TableCell>
                        <TableCell align="center">
                          <Button data-id={row.id} variant="text" onClick={handleRemoveIconClick}>
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}

                    <TableRow className="table-footer">
                      <TableCell colSpan={4} />
                      <TableCell align="right">
                        <h2>TOTAL</h2>
                      </TableCell>
                      <TableCell align="right">{formatPrice(cartTotal)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box className="cart-details-footer" component="div">
                <Button className="checkout" size="large" variant="contained">
                  PROCEED TO CHECKOUT
                  <ArrowForwardIcon />
                </Button>
              </Box>
            </>
          ) : (
            <Box className="cart-empty">
              <img alt="cart empty" src={empty} />
              <h2>Your cart is empty</h2>
            </Box>
          )}
        </Box>
      )}
      {isOpen && (
        <Notificator
          closeNotificator={closeNotificator}
          isOpen={isOpen}
          severity={severity}
          text={text}
        />
      )}
    </Box>
  )
}

export default CartDetail
