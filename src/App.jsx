import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Plans from "./pages/Plans/Plans"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"
import ScrollToTop from "./components/ScrollToTop"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="plans" element={<Plans />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ScrollToTop>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
