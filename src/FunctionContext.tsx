import React, { useContext } from 'react'
import { ThemeContext } from './Contexts.tsx'

export const FunctionContext = () => {
  const dark = useContext(ThemeContext);
  if (!dark) {
      // Handle the case where context is null, maybe show an error or return null
      return <div>DarkTheme is not available</div>;
    }

    const {darkTheme} = dark
  
  const themeStyles ={
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin:'2rem'
  }
  return (
    <div style={themeStyles}>FunctionContext</div>
  )
}
