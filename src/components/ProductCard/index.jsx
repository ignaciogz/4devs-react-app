import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import './styles.scss'

import useAuth from '../../hooks/useAuth'
import useCart from '../../hooks/useCart'
import useNotificator from '../../hooks/useNotificator'
import Notificator from '../Notificator'

const ProductCard = ({ id, name, price, img }) => {
  const navigate = useNavigate()
  const { isOpen, severity, text, closeNotificator, setNotificator } = useNotificator()
  const { isLogged } = useAuth()
  const { addCartItem } = useCart()

  const handleClick = async (event) => {
    event.preventDefault()

    if (isLogged) {
      const { id } = event.target.dataset

      const success = await addCartItem({
        id_prod: Number(id),
        qty: 1,
      })

      if (success) setNotificator('success', 'Item added')
      else {
        setNotificator('error', 'Add item failed')

        setTimeout(() => {
          navigate('/login')
        }, 3000)
      }
    } else {
      navigate('/login')
    }
  }

  return (
    <Grid item xs={3}>
      <Card className="product-card">
        <CardActionArea component={Link} to={`/product/${id}`}>
          <Box className="product-details" component="div">
            <CardMedia alt={name} component="img" height="180" src={img} />
            <CardContent className="content">
              <Typography gutterBottom component="div" variant="h5">
                {name}
              </Typography>
              <Typography className="price">${price}</Typography>
            </CardContent>
          </Box>
        </CardActionArea>
        <CardActions className="actions">
          <Button
            className="add-to-cart-btn"
            data-id={id}
            variant="contained"
            onClick={handleClick}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      {isOpen && (
        <Notificator
          closeNotificator={closeNotificator}
          isOpen={isOpen}
          severity={severity}
          text={text}
        />
      )}
    </Grid>
  )
}

export default ProductCard
