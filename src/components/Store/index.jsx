import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Select from '@mui/material/Select'

import './styles.scss'

import ProductCard from '../ProductCard'
import ProductFilters from '../ProductFilters'

const categories = ['Category 1', 'Category 4', 'Category 7', 'Category 9']
const brands = ['Brand 1', 'Brand 3', 'Brand 8']

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 30,
    description: 'Description 1',
    img: 'https://dummyimage.com/218x180/000/fff',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 450,
    description: 'Description 4',
    img: 'https://dummyimage.com/218x180/444/C4A',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 150,
    description: 'Description 6',
    img: 'https://dummyimage.com/218x180/AF2/23B',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 220,
    description: 'Description 8',
    img: 'https://dummyimage.com/218x180/000/fff',
  },
  {
    id: 12,
    name: 'Product 12',
    price: 175,
    description: 'Description 12',
    img: 'https://dummyimage.com/218x180/444/C4A',
  },
]

const Store = () => {
  const [order, setOrder] = React.useState('')

  const handleChange = (event) => {
    setOrder(event.target.value)
  }

  return (
    <Box className="store" component="section">
      <h1>4DEVS Shop</h1>
      <Toolbar id="back-to-top-anchor" />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProductFilters brands={brands} categories={categories} />
        </Grid>
        <Grid item xs={9}>
          <Box className="productsSorter" component="div">
            <small>Sorted by:</small>
            <FormControl size="small" sx={{ minWidth: 120 }} variant="standard">
              <Select
                id="sorted-by"
                label="sorted-by"
                labelId="sorted-by-label"
                value={order}
                onChange={handleChange}
              >
                <MenuItem value={'name-ASC'}>NAME, A-Z</MenuItem>
                <MenuItem value={'name-DESC'}>NAME, Z-A</MenuItem>
                <MenuItem value={'price-ASC'}>PRICE, Low to High</MenuItem>
                <MenuItem value={'price-DESC'}>PRICE, High to Low</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Grid container className="products-grid" spacing={1}>
            {products.length > 0 &&
              products.map((item, index) => <ProductCard key={index} {...item} />)}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Store
