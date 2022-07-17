import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import './styles.scss'

import useAuth from '../../hooks/useAuth'
import ChatMessages from '../ChatMessages'
import ChatMessageInput from '../ChatMessageInput'

const ChatContainer = () => {
  const navigate = useNavigate()
  const { isLogged } = useAuth()
  const [loader, setLoader] = useState(true)
  const [isConnected, setIsConnected] = useState()
  const [socket, setSocket] = useState()

  // ↓ ****** START - AUTH ****** ↓
  useEffect(() => {
    !isLogged && navigate('/login')

    setLoader(false)
  }, [])
  // ↑ ****** END - AUTH ****** ↑

  useEffect(() => {
    !isLogged && navigate('/login')

    const newSocket = io(`http://${window.location.hostname}:8080`, {
      withCredentials: true,
    })

    setSocket(newSocket)

    newSocket.on('connect', () => {
      setIsConnected(true)
      setLoader(false)
    })

    newSocket.on('disconnect', () => {
      setIsConnected(false)
    })

    return () => {
      newSocket.close()
      newSocket.off('connect')
      newSocket.off('disconnect')
    }
  }, [setSocket])

  return (
    <Box className="chat" component="section">
      {loader ? (
        <Box className="loader">
          <CircularProgress />
        </Box>
      ) : (
        <Box className="chat-container">
          <h1>CHAT</h1>
          <ChatMessages socket={socket} />
          <ChatMessageInput socket={socket} />
        </Box>
      )}
    </Box>
  )
}

export default ChatContainer
