import "./navbar.css"
import React, { useContext, useState } from 'react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import Prompt from "../prompt/Prompt"
import { AppContext } from "../../context/AppContext"

export default function Navbar() {
  const {searchQuery, setSearchQuery, setUser} = useContext(AppContext)
  const [prompt, setPrompt] = useState(false)

    const handleLogout = () => signOut(auth).then(() => {
      setPrompt(true)
    }).catch((error) => {
    });

    const handlePromptConfirm = () => {
      setUser(false)
      setPrompt(false); // Hide the prompt after confirming
    };
    
    const handlePromptCancel = () => {
      setPrompt(false); // Hide the prompt
    };

  return (
    <header className='header'>
    <nav className='quizNavbar'>
      <h1>D-N-D</h1>
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
