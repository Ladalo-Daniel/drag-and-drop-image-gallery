import "./navbar.css"
// import React, { useState } from 'react'
// import { auth } from '../../firebase'
// import { signOut } from 'firebase/auth'
// import { Navigate } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'

export default function Navbar({searchQuery, setSearchQuery}) {

    // const handleLogout = () => signOut(auth).then(() => {
    //   Navigate("/login")
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });

  return (
    <header className='header'>
    <nav className='quizNavbar'>
      <h1>ImgGary</h1>
      <input
        type="text"
        placeholder="Search by tag..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='menuIconContainer'>
      <i className= " fas fa-sun menuIcon "></i>
      </div>
    </nav>
    </header>
  )
}
