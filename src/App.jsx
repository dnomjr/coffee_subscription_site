import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Plans from "./pages/Plans"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="plans" element={<Plans />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
/*         className = "w-[163px] h-[18px] sm:w-[236px] sm:h-auto fill-white"
 */
