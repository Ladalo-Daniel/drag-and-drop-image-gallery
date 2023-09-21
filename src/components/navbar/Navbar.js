import "./navbar.css"
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Prompt from "../prompt/Prompt"

export default function Navbar({searchQuery, setSearchQuery, setUser}) {
  const [prompt, setPrompt] = useState(false)
  const navigate = useNavigate()

    const handleLogout = () => signOut(auth).then(() => {
      setPrompt(true)
    }).catch((error) => {
    });

    const handlePromptConfirm = () => {
      setUser(false)
      navigate("/login")
      setPrompt(false); // Hide the prompt after confirming
    };
    
    const handlePromptCancel = () => {
      setPrompt(false); // Hide the prompt
    };

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
       {prompt && (
        <Prompt
          message="Are you sure you want to logout?"
          onConfirm={handlePromptConfirm}
          onCancel={handlePromptCancel}
        />
      )}
      <div className='menuIconContainer' onClick={handleLogout}>
      <i className= " fas fa-sun menuIcon "></i>
      </div>
    </nav>
    </header>
  )
}
