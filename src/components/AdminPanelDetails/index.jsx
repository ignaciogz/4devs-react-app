import * as React from 'react'
import Button from '@mui/material/Button'
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
      format: (value) => value.toLocaleString('en-US'),
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
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'actions',
      label: '',
      width: 160,
      align: 'right',
    },
  ],
}

// PROPS
/* const data = [
  {
    id: 4,
    date: '29/06/2022',
    email: 'pepito@gmail.com',
    name: 'Pepe',
    total: 2300,
    cartID: 14852,
  },
] */

const data = [
  {
    id: 4,
    category: 'Standing desk',
    name: 'Desk Go',
    price: 1100,
    stock: 5,
  },
]

const tableName = {
  products: {
    text: 'products',
    span: 5,
  },
  categories: {
    text: 'categories',
    span: 2,
  },
  users: {
    text: 'users',
    span: 4,
  },
  orders: {
    text: 'orders',
    span: 6,
  },
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

const AdminPanelDetails = ({ dataName = 'orders' }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(7)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const rows = createData(data, dataName)

  return (
    <Paper className="admin-panel-details">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className="table-name" colSpan={tableName[dataName].span}>
                <h1>{tableName[dataName].text}</h1>
              </TableCell>
              {dataName !== 'orders' && (
                <TableCell align="right" className="table-name">
                  <ModalForm action="add" text="NEW" variant="text" />
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              {columns[dataName].map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, width: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                  {columns[dataName].map((column) => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[7, 14, 21]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default AdminPanelDetails
