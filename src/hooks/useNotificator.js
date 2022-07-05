import { useState } from 'react'

const useNotificator = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [text, setText] = useState('')
  const [severity, setSeverity] = useState('info')

  const openNotificator = () => {
    setIsOpen(!isOpen)
  }
  const closeNotificator = () => setIsOpen(false)

  const setNotificator = (severity, text) => {
    setText(text)
    setSeverity(severity)
  }

  const stopProp = (e) => e.stopPropagation()

  return {
    isOpen,
    text,
    severity,
    openNotificator,
    closeNotificator,
    stopProp,
    setNotificator,
  }
}

export default useNotificator
