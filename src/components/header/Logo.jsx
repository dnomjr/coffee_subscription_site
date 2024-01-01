import { Link } from "react-router-dom"
import logo from "../../assets/shared/desktop/logo.svg"

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src={logo}
          alt=""
          className="w-[203px] sm:w-[236px] dark:brightness-[500%]"
        />
      </Link>
    </>
  )
}
export default Logo
