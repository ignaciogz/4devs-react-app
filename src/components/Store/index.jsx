import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import './styles.scss'

import ProductFilters from '../ProductFilters'

const categories = ['Categoria 1', 'Categoria 4', 'Categoria 7', 'Categoria 9']
const brands = ['Marca 1', 'Marca 3', 'Marca 8']

const Store = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Box className="store" component="section">
      <h1>4DEVS Shop</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProductFilters brands={brands} categories={categories} />
        </Grid>
        <Grid item xs={9}>
          <Box className="productsSorter" component="div">
            <small>Sorted by:</small>
            <FormControl size="small" sx={{ minWidth: 120 }} variant="standard">
              <Select
                id="demo-simple-select"
                label="Age"
                labelId="demo-simple-select-label"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <p>Map Products</p>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Store
