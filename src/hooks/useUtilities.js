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

  const getIconButtonTarget = (target) => {
    if (target.tagName == 'svg') target = event.target.parentNode
    if (target.tagName == 'path') target = event.target.parentNode.parentNode

    return target
  }

  return { formatPrice, getIconButtonTarget }
}

export default useUtilities
