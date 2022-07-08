import React, { createContext, useEffect, useState } from 'react'

import Service from '../services/userService'

const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ logged: false })
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    if (user.logged && !dataLoaded) {
      Service.get().then((result) => {
        setUser({ ...user, ...result.data.user })
        setDataLoaded(true)
      })
    }
  }, [user, dataLoaded])

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
