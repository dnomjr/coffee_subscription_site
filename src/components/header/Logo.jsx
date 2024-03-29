import { Link } from "react-router-dom"
import logo from "../../assets/shared/desktop/logo.svg"

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src={logo}
          alt=""
          className="w-[12.6875rem] sm:w-[14.75rem] dark:brightness-[500%] cursor-default lg:cursor-pointer"
        />
      </Link>
    </>
  )
}
export default Logo
