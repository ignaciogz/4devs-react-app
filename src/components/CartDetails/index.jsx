import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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

import CartQty from '../CartQty'

/* cartServer = [
  { id: 1, qty: 2 },
  { id: 4, qty: 1 },
  { id: 5, qty: 4 },
  { id: 2, qty: 1 },
] */

const cart = [
  {
    product: {
      id: 1,
      name: 'Smart Chair',
      price: 870,
      img: 'http://localhost:3000/img/products/smart_chair.jpg',
      stock: 10,
    },
    qty: 2,
  },
  {
    product: {
      id: 4,
      name: 'Desk Go',
      price: 1100,
      img: 'http://localhost:3000/img/products/desk_go.jpg',
      stock: 5,
    },
    qty: 1,
  },
  {
    product: {
      id: 5,
      name: 'Extreme Click',
      price: 95,
      img: 'http://localhost:3000/img/products/extreme_click.jpg',
      stock: 25,
    },
    qty: 4,
  },
  {
    product: {
      id: 2,
      name: 'E Foot Rocker',
      price: 119,
      img: 'http://localhost:3000/img/products/foot_rocker.jpg',
      stock: 8,
    },
    qty: 1,
  },
]

const CartDetails = () => {
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
      qty: <CartQty item={item} />,
      subtotal,
    }
  }

  function createRows(cart) {
    return cart.map((item) => createRow(item))
  }

  function getTotal(items) {
    return items.map(({ subtotal }) => subtotal).reduce((sum, i) => sum + i, 0)
  }

  const rows = createRows(cart)
  const total = getTotal(rows)

  return (
    <Box className="cart-details" component="section">
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
            {rows.map((row, index) => (
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
              <TableCell align="right">${total}</TableCell>
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
  )
}

export default CartDetails
