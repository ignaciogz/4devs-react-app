import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Select from '@mui/material/Select'

import './styles.scss'

import ProductCard from '../ProductCard'
import ProductFilters from '../ProductFilters'

const Store = ({ brands, categories, products }) => {
  const [productsFiltered, setProductsFiltered] = useState(products)
  const [order, setOrder] = useState('')

  const handleChange = (event) => {
    setOrder(event.target.value)
  }

  return (
    <Box className="store" component="section">
      <h1>4DEVS Shop</h1>
      <Toolbar id="back-to-top-anchor" />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProductFilters
            brands={brands}
            categories={categories}
            setProductsFiltered={setProductsFiltered}
          />
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
            {productsFiltered.length > 0 ? (
              productsFiltered.map(
                (item, index) => item.stock > 0 && <ProductCard key={index} {...item} />,
              )
            ) : (
              <Box className="no-producs-with-filter" component="small">
                We do not have products with the selected filters
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Store
