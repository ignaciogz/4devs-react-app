import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import './styles.scss'

const ProductFilters = ({ categories, brands }) => {
  const [price, setPrice] = React.useState('')

  const handleChange = (event) => {
    setPrice(event.target.value)
  }

  return (
    <Box className="productFilters" component="section">
      <h3>Categories</h3>
      {categories.length > 0 ? (
        <ul>
          {categories.map((item, index) => (
            <li key={index}>
              <Button variant="text">{item}</Button>
            </li>
          ))}
        </ul>
      ) : (
        <img alt="Próximamente..." className="soon" src={soon} />
      )}
      <Divider className="divider" />

      <h3>Price</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={price}
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio className="radio-btn" size="small" />}
            label="Below $100.00"
            value="female"
          />
          <FormControlLabel
            control={<Radio className="radio-btn" size="small" />}
            label="$100.00-$199.00"
            value="male"
          />
          <FormControlLabel
            control={<Radio className="radio-btn" size="small" />}
            label="$200.00-$299.00"
            value="other"
          />
          <FormControlLabel
            control={<Radio className="radio-btn" size="small" />}
            label="Above $500.00"
            value="other 2"
          />
        </RadioGroup>
      </FormControl>
      <Divider className="divider" />

      <h3>Brands</h3>
      {brands.length > 0 ? (
        <ul>
          {brands.map((item, index) => (
            <li key={index}>
              <Button variant="text">{item}</Button>
            </li>
          ))}
        </ul>
      ) : (
        <img alt="Próximamente..." className="soon" src={soon} />
      )}
    </Box>
  )
}

export default ProductFilters
