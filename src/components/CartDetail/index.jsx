import React, { useEffect, useState } from 'react'
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

import './styles.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DeleteIcon from '@mui/icons-material/DeleteForever'

import CartDetailQty from '../CartDetailQty'
import useCart from '../../hooks/useCart'

const CartDetail = () => {
  const { cartDetail, getCartDetail } = useCart()
  const [loader, setLoader] = useState(true)

  async function getDetail() {
    const success = await getCartDetail()

    success && setLoader(false)
  }

  useEffect(() => {
    getDetail()
  }, [])

  function subtotalCol(item) {
    return item.product.price * item.qty
  }

  function createRow(item) {
    const subtotal = subtotalCol(item)
    const product = item.product

    return {
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

  const cartRows = cartDetail ? createRows(cartDetail) : []
  const cartTotal = cartRows.length > 0 ? calculateTotal(cartRows) : 0

  return (
    <Box className="cart-details" component="section">
      {loader ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <h1>Shopping Cart</h1>
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
                {cartRows.length > 0 &&
                  cartRows.map((row, index) => (
                    <TableRow key={index} className="table-content">
                      <TableCell align="center" size="small">
                        <img alt={`image of ${row.name}`} src={row.img} />
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.qty}</TableCell>
                      <TableCell align="right">${row.subtotal}</TableCell>
                      <TableCell align="center">
                        <Button variant="text">
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
                  <TableCell align="right">${cartTotal}</TableCell>
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
        </Box>
      )}
    </Box>
  )
}

export default CartDetail
