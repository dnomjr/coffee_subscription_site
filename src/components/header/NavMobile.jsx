import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"
import { navLinks } from "../../constants"

const NavMobile = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const handleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }

  return (
    <>
      <div className="md:hidden ">
        {!isToggleMenu ? (
          <FaBars onClick={handleMenu} className="w-5 h-5" />
        ) : (
          <>
            <FaTimes onClick={handleMenu} className="w-5 h-5" />
          </>
        )}
      </div>

      <nav
        className={`absolute top-[100%] w-full right-0 flex flex-col gap-8  text-black  transition duration-1000 ease-in-out min-h-[500px] md:hidden bg-gradient-to-b from-gradientMenu2 from-55% to-gradientMenu pt-10 ${
          isToggleMenu
            ? "translate-x-0 opacity-100"
            : "translate-x-[125%] opacity-0 "
        }`}
      >
        {navLinks.map((link) => {
          const { id, href, label } = link
          return (
            <NavLink
              key={id}
              to={href}
              className="font-frauncesBlack font-extrabold text-2xl text-center leading-8 text-darkGreyBlue"
              onClick={handleMenu}
            >
              {label.toUpperCase()}
            </NavLink>
          )
        })}
      </nav>
    </>
  )
}
export default NavMobile
