/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [stepId, setStepId] = useState(null)
  const [questId, setQuestId] = useState(null)
  const [checkedOption, setCheckedOption] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (checkedOption) {
    checkedOption.sort((a, b) => a.id - b.id)
  }

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        stepId,
        setStepId,
        questId,
        setQuestId,
        checkedOption,
        setCheckedOption,
        isModalOpen,
        setIsModalOpen,

      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
