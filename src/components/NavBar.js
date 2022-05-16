import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Create Account</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/feed">Find My BestFriend</Link></li>
        </ul>
    </div>
  )
}

export default NavBar