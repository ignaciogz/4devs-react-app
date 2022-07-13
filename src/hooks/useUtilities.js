const useUtilities = () => {
  const formatPrice = (price, withDecimals = true) => {
    let config = {
      style: 'currency',
      currency: 'USD',
    }

    if (!withDecimals) {
      config = {
        ...config,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    }

    const formatter = new Intl.NumberFormat('en-US', config)

    return formatter.format(price)
  }

  return { formatPrice }
}

export default useUtilities
