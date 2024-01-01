/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <AppContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {" "}
      {children}{" "}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
