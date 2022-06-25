import * as React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteForever'

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
}

// PROPS
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
}

// Logic
function createData(data, tableName = 'users') {
  return data.map((item) => createDataFactory[tableName](item))
}

const createDataFactory = {
  products: createProductsData,
  categories: createCategoriesData,
  users: createUsersData,
}

function createActions(id) {
  return (
    <Box component="section">
      <Button value={id} variant="text">
        <EditIcon />
      </Button>
      <Button value={id} variant="text">
        <DeleteIcon />
      </Button>
    </Box>
  )
}

//DTOS
function createProductsData({ id, category, name, price, stock }) {
  let actions = createActions(id)

  return { id, category, name, price, stock, actions }
}

function createCategoriesData({ id, name }) {
  let actions = createActions(id)

  return { id, name, actions }
}

function createUsersData({ id, email, name, role }) {
  let actions = createActions(id)

  return { id, email, name, role, actions }
}

const rows = createData(data)

const AdminPanelDetails = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(7)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className="admin-panel-details">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className="table-name" colSpan={tableName['categories'].span}>
                <h1>{tableName['categories'].text}</h1>
              </TableCell>
              <TableCell align="right" className="table-name">
                <Button variant="text">
                  <AddIcon />
                  NEW
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns['categories'].map((column) => (
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
                  {columns['categories'].map((column) => {
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
