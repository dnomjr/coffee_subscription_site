import ThemeSwitcher from "./ThemeSwitcher"
import NavDesktop from "./NavDesktop"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="relative  flex justify-between items-center w-full overflow-x-clip  max-w-[1280px] m-auto py-10 sm:py-12 lg:py-14 px-6 md:px-10 lg:px-12">
      <Logo />
      <ThemeSwitcher />
      <NavDesktop />
    </header>
  )
}
export default Header
