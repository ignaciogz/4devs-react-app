import * as React from 'react'
import TextField from '@mui/material/TextField'

import './styles.scss'

const CartDetailQty = ({ item }) => {
  const [units, setUnits] = React.useState(item.qty)
  const handleChange = (event) => {
    setUnits(event.target.value)
  }

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      className="units-to-add"
      color="warning"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 1, max: item.product.stock }}
      label="Units to add"
      type="number"
      value={units}
      variant="standard"
      onChange={handleChange}
    />
  )
}

export default CartDetailQty
