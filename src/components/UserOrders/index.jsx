import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import OpenIcon from '@mui/icons-material/OpenInNew'

import ModalAlert from '../ModalAlert'
import ModalForm from '../ModalForm'

import './styles.scss'

import useOrders from '../../hooks/useOrders'
import useUtilities from '../../hooks/useUtilities'

const UserOrders = ({ dataName = 'user_orders' }) => {
  const { orders, getUserOrders } = useOrders()
  const { formatPrice } = useUtilities()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(7)
  const [loader, setLoader] = useState(true)

  async function getOrders() {
    const success = await getUserOrders()

    success && setLoader(false)
  }

  useEffect(() => {
    getOrders()
  }, [])

  const columns = {
    products: [
      { id: 'id', label: 'ID', width: 70 },
      { id: 'category', label: 'Category', minWidth: 100 },
      {
        id: 'name',
        label: 'Name',
        minWidth: 100,
        align: 'right',
      },
      {
        id: 'price',
        label: 'Price',
        minWidth: 100,
        align: 'right',
        format: (value) => formatPrice(value),
      },
      {
        id: 'stock',
        label: 'Stock',
        minWidth: 100,
        align: 'right',
      },
      {
        id: 'actions',
        label: '',
        width: 160,
        align: 'right',
      },
    ],
    categories: [
      { id: 'id', label: 'ID', width: 70 },
      { id: 'name', label: 'Name', minWidth: 100 },
      {
        id: 'actions',
        label: '',
        width: 160,
        align: 'right',
      },
    ],
    users: [
      { id: 'id', label: 'ID', width: 70 },
      { id: 'email', label: 'Email', minWidth: 100 },
      {
        id: 'name',
        label: 'Name',
        minWidth: 100,
        align: 'right',
      },
      {
        id: 'role',
        label: 'Role',
        minWidth: 100,
        align: 'right',
      },
      {
        id: 'actions',
        label: '',
        width: 160,
        align: 'right',
      },
    ],
    orders: [
      { id: 'id', label: 'ID', width: 70 },
      { id: 'date', label: 'Date', minWidth: 100 },
      { id: 'email', label: 'Email', minWidth: 100 },
      {
        id: 'name',
        label: 'Name',
        minWidth: 100,
        align: 'right',
      },
      {
        id: 'total',
        label: 'Total',
        minWidth: 100,
        align: 'right',
        format: (value) => formatPrice(value),
      },
      {
        id: 'actions',
        label: '',
        width: 160,
        align: 'right',
      },
    ],
    user_orders: [
      { id: 'id', label: 'ID', width: 70 },
      { id: 'timestamp', label: 'Date', width: 170 },
      {
        id: 'qty',
        label: 'Quantity',
        width: 90,
        format: (value) => (value == 1 ? `${value} unit` : `${value} units`),
      },
      {
        id: 'total',
        label: 'Total',
        align: 'right',
        format: (value) => formatPrice(value),
      },
      {
        id: 'actions',
        label: '',
        width: 160,
        align: 'right',
      },
    ],
  }

  // Logic
  function createData(data, tableName) {
    return data.map((item) => createDataFactory[tableName](item))
  }

  const createDataFactory = {
    products: createProductsData,
    categories: createCategoriesData,
    users: createUsersData,
    orders: createOrdersData,
    user_orders: createUserOrdersData,
  }

  function createActions(id, text) {
    return (
      <>
        <ModalForm action="edit" id={id} variant="text" />
        <ModalAlert action="delete" id={id} textDialog={text} variant="text" />
      </>
    )
  }

  function createViewAction(id) {
    return (
      <Button data-id={id} value="open" variant="text">
        <OpenIcon />
      </Button>
    )
  }

  function createViewPageAction(id, route) {
    return (
      <Button aria-label={`go to ID ${id}`} component={Link} to={route} variant="text">
        <OpenIcon />
      </Button>
    )
  }

  //DTOS
  function createProductsData({ id, category, name, price, stock }) {
    const text = `the product with id: ${id}`
    let actions = createActions(id, text)

    return { id, category, name, price, stock, actions }
  }

  function createCategoriesData({ id, name }) {
    const text = `the category with id: ${id}`
    let actions = createActions(id, text)

    return { id, name, actions }
  }

  function createUsersData({ id, email, name, role }) {
    const text = `the user with id: ${id}`
    let actions = createActions(id, text)

    return { id, email, name, role, actions }
  }

  function createOrdersData({ id, date, email, name, total }) {
    let actions = createViewAction(id)

    return { id, date, email, name, total, actions }
  }

  // MIO
  function createUserOrdersData({ id, timestamp, items }) {
    let actions = createViewPageAction(id, `/order/${id}`)
    let qty = calculateQty(items)
    let total = calculateTotal(items)

    return { id, timestamp, qty, total, actions }
  }

  function calculateTotal(items) {
    return items.reduce((a, b) => a + b.price * b.qty, 0)
  }

  function calculateQty(items) {
    return items.reduce((a, b) => a + b.qty, 0)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const ordersRows = !loader && orders ? createData(orders, dataName) : []

  return (
    <Box className="user-orders" component="section">
      {loader ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <h1>User Orders</h1>
          {ordersRows.length > 0 ? (
            <Paper>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns[dataName].map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            width: column.width,
                            maxWidth: column.maxWidth,
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ordersRows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        return (
                          <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                            {columns[dataName].map((column) => {
                              const value = row[column.id]

                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              )
                            })}
                          </TableRow>
                        )
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                component="div"
                count={ordersRows.length}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[7, 14, 21]}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          ) : (
            <Box>Vacio</Box>
          )}
        </Box>
      )}
    </Box>
  )
}

export default UserOrders
