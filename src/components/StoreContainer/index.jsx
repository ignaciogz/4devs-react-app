import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import Store from '../Store'
import useProducts from '../../hooks/useProducts'

const StoreContainer = () => {
  const { products, getAll } = useProducts()
  const [loader, setLoader] = useState(true)

  async function getProducts() {
    await getAll()
    setLoader(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Box>
      {loader ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
        <Store data={products} />
      )}
    </Box>
  )
}

export default StoreContainer
