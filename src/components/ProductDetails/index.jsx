import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

import './styles.scss'

import useProducts from '../../hooks/useProducts'
import useNotificator from '../../hooks/useNotificator'
import Notificator from '../Notificator'

const ProductDetails = () => {
  const { id } = useParams()
  const { product, getID } = useProducts()
  const navigate = useNavigate()
  const { isOpen, severity, text, closeNotificator, setNotificator } = useNotificator()
  const [loader, setLoader] = useState(true)
  const [units, setUnits] = useState(1)

  async function getProduct(id) {
    const success = await getID(id)

    if (success) setLoader(false)
    else {
      setTimeout(() => {
        navigate('/error404')
      }, 1500)
    }
  }

  useEffect(() => {
    getProduct(id)
  }, [id])

  const handleChange = (event) => {
    setUnits(event.target.value)
  }

  return (
    <Box className="product-details" component="section">
      {loader ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
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
                {product.description.length > 0 &&
                  product.description.map((paragraph, index) => (
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
          {isOpen && (
            <Notificator
              closeNotificator={closeNotificator}
              isOpen={isOpen}
              severity={severity}
              text={text}
            />
          )}
        </Grid>
      )}
    </Box>
  )
}

export default ProductDetails
