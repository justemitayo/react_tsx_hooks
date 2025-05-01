import React, { createContext, useState } from 'react'
import {FunctionContext} from './FunctionContext.tsx';
import {ClassContext} from './ClassContext.tsx';

interface ThemeContextType {
  darkTheme: boolean;
  // toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const Contexts = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () =>{
        setDarkTheme((prevDarkTheme) => !prevDarkTheme)
    }
  return (
    <ThemeContext.Provider value={{darkTheme}}>
      <hr/>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContext />
        <ClassContext />
    </ThemeContext.Provider>
  )
}
