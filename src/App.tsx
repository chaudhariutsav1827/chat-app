import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { startConnection } from "./signalr/signalrConnections";
import Login from "./View/Login";
import Index from "./View/Index";
import Register from "./View/Register";

const App = () => {

  useEffect(() => {
    startConnection()
  },[])
  return (
      < BrowserRouter >
        <Routes>
          <Route path="/chat" element={<Index />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
      </ BrowserRouter >
  )
}

export default App
