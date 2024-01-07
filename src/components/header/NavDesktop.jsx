import { NavLink } from "react-router-dom"
import NavMobile from "./NavMobile"
import { navLinks } from "../../constants"

const NavDesktop = () => {
  return (
    <>
      <nav className=" gap-8 hidden md:flex text-grey dark:text-lightCream font-barlow font-bold text-xs tracking-[.0577rem] ">
        {navLinks.map((link) => {
          const { id, href, label } = link
          return (
            <NavLink
              key={id}
              to={href}
              className={({ isActive }) =>
                [
                  "lg:hover:text-darkGreyBlue dark:lg:hover:text-lightCream md:cursor-default lg:cursor-pointer",
                  isActive
                    ? "text-darkGreyBlue dark:text-lightCream"
                    : "text-grey ",
                ].join(" ")
              }
            >
              {label.toUpperCase()}
            </NavLink>
          )
        })}
      </nav>

      <NavMobile />
    </>
  )
}
export default NavDesktop
