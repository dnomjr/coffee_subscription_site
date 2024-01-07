import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/Footer"

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-[80rem] px-6 md:px-10 lg:px-12">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default SharedLayout
