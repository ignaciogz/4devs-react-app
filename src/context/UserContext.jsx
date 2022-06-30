import React, { createContext, useEffect, useState } from 'react'

import Service from '../services/userService'

const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([])

  useEffect(() => {
    Service.get().then((data) => {
      setUser(data)
    })
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }
export default UserContext
