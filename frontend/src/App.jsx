import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./pages/signin.jsx"
import SignUp from "./pages/signup.jsx"
import Home from "./pages/home.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
