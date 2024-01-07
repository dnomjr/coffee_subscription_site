import { NavLink, Link } from "react-router-dom"
import logo from "../assets/shared/desktop/logoFooter.svg"
import { navLinks } from "../constants"
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="max-w-[80rem] mx-auto px-6 md:px-12 ">
      <div className="bg-darkGreyBlue dark:bg-[#28313C] flex flex-col gap-y-12 text-center py-14  mb-6  lg:flex-row lg:justify-between lg:px-20 rounded-lg">
        <Link to="/">
          <img
            src={logo}
            alt="Coffeeroasters logo"
            className="w-[13.5625rem] sm:w-[14.75rem]  text-red-500 mx-auto lg:mx-0"
          />
        </Link>

        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-8 md:justify-center items-center">
          {navLinks.map((link) => {
            const { id, href, label } = link
            return (
              <NavLink
                key={id}
                to={href}
                className={({ isActive }) =>
                  [
                    "font-barlow font-bold leading-4 text-xs tracking-tighter-[.0577rem] transition duration-500 lg:hover:text-lightCream",
                    isActive ? "text-lightCream " : "text-grey",
                  ].join(" ")
                }
              >
                {label.toUpperCase()}
              </NavLink>
            )
          })}
        </div>

        <div className="text-white flex gap-x-4 justify-center ">
          <FaFacebookSquare className="w-6 h-6 transition duration-500 lg:hover:text-paleOrange lg:hover:cursor-pointer md:w-7 md:h-7" />
          <FaTwitter className="w-6 h-6 transition duration-500 lg:hover:text-paleOrange lg:hover:cursor-pointer md:w-7 md:h-7" />
          <FaInstagram className="w-6 h-6 transition duration-500 lg:hover:text-paleOrange lg:hover:cursor-pointer md:w-7 md:h-7" />
        </div>
      </div>
    </footer>
  )
}
export default Footer
