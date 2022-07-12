import React from 'react'

import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App
