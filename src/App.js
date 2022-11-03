import Navbar from "./Navbar"

import Home from "./pages/Home"

import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Regi"

function App() {
  return (
    <>
      <Navbar />
      <div >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
       
        </Routes>
      </div>
    </>
  )
}

export default App
