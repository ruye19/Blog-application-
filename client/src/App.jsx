import React from 'react'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Write from "./pages/Write/Write"
import Single from './pages/Single/Single'
import Layout from './component/Layout'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="write" element={<Write />} />
          <Route path="post/:id" element={<Single />} />

      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
   
    </Routes>
   </Router>
    
   
  )
}

export default App
