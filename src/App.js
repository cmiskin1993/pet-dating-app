import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Feed from './components/profile/Feed'
import UserProfile from './components/profile/UserProfile'
import Login from './components/session/Login'
import Signup from './components/session/Signup'

const App = () => {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App