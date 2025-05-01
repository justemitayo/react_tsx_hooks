import React, { useState, createContext } from 'react'
import Login from './Login.tsx'
import User from './User.tsx'

interface AppContextType {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | null>(null)

const Context = () => {
  const [username, setUsername] = useState<string>('')
  return (
    <AppContext.Provider value={{username, setUsername}}>
       <Login /> <User />
    </AppContext.Provider>
  )
}

export default Context