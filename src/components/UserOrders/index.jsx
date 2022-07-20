import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import './styles.scss'

const order = {
  id: 8461,
  date: '29/06/2022',
  user: {
    email: 'pepito@gmail.com',
    name: 'Pepe',
  },
  total: 2300,
}

import useOrders from '../../hooks/useOrders'

const UserOrders = () => {
  const { id } = useParams()
  const { order, getIDOrders } = useOrders()

  async function getOrders(id) {
    const result = await getIDOrders(id)

    result.success && setLoader(false)
  }

  useEffect(() => {
    getOrders(id)
  }, [id])

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
      qty: item.qty,
      subtotal,
    }
  }

  function createRows(cart) {
    return cart.map((item) => createRow(item))
  }

  const rows = createRows(cart)

  return (
    <Box component="section">
      {loader ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
        <Paper className="user-orders">
          <h1>Order: {order.id}</h1>
          <small>{order.date}</small>
          <Box className="user-orders-user" component="section">
            <ul>
              <li>
                <h3>Email: </h3>
                <p>{order.user.email}</p>
              </li>
              <li>
                <h3>Name: </h3>
                <p>{order.user.name}</p>
              </li>
            </ul>
          </Box>

          <Box className="user-orders-details" component="section">
            <h2>DETAILS</h2>
          </Box>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
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
                  </TableRow>
                ))}

                <TableRow className="table-footer">
                  <TableCell colSpan={3} />
                  <TableCell align="right">
                    <h2>TOTAL</h2>
                  </TableCell>
                  <TableCell align="right">${order.total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  )
}

export default UserOrders
