import { IoMdSunny, IoMdMoon } from "react-icons/io"
/* import { useGlobalContext } from "../../context"
 */ import { useState, useEffect } from "react"

const ThemeSwitcher = () => {
  /*   const { isDarkTheme } = useGlobalContext()
   */ const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    if (isDarkTheme === true) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkTheme])

  return (
    <>
      {isDarkTheme ? (
        <IoMdSunny
          className="text-lightCream lg:cursor-pointer sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          onClick={handleTheme}
        />
      ) : (
        <IoMdMoon
          className="text-darkBody lg:cursor-pointer w-5 h-5 sm:w-7 sm:h-7 "
          onClick={handleTheme}
        />
      )}
    </>
  )
}
export default ThemeSwitcher
