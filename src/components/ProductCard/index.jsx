import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import './styles.scss'

const ProductCard = ({ name, price, description, img }) => {
  return (
    <Grid item xs={3}>
      <Card class="product-card">
        <Box className="product-details" component="div">
          <CardMedia alt={name} component="img" height="180" src={img} />
          <CardContent className="content">
            <Typography gutterBottom component="div" variant="h5">
              {name}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {description}
            </Typography>
            <Typography className="price">${price}</Typography>
          </CardContent>
        </Box>
        <CardActions className="actions">
          <Button className="add-to-cart-btn" variant="contained">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCard
