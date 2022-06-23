import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

import './styles.scss'

const res = await fetch('/mydata.json')
const data = await res.json()
const product = data.products[3]

const finalDescription = product.description.split(';')

const ProductDetails = () => {
  const [units, setUnits] = React.useState(1)
  const handleChange = (event) => {
    setUnits(event.target.value)
  }

  return (
    <Box className="product-details" component="section">
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <img src={product.img} />
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <h1>{product.name}</h1>
              <Rating readOnly name="read-only" precision={0.5} value={product.rating} />
              <Divider className="divider" />
            </Grid>
            <Grid item xs={12}>
              <Typography className="price">${product.price}</Typography>
            </Grid>
            <Grid item xs={12}>
              {finalDescription.length > 0 &&
                finalDescription.map((paragraph, index) => (
                  <Typography
                    key={index}
                    className="description"
                    color="text.secondary"
                    variant="body2"
                  >
                    {paragraph}
                  </Typography>
                ))}
            </Grid>
            <Grid item xs={12}>
              <Box className="wrapper-units-to-add" component="div">
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="units-to-add"
                  color="warning"
                  id="units-to-add"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 1, max: 5 }}
                  label="Units to add"
                  type="number"
                  value={units}
                  variant="standard"
                  onChange={handleChange}
                />
                <Button className="add-to-cart-btn" variant="contained">
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductDetails
