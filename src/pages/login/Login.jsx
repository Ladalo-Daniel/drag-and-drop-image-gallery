
import React, { useContext } from "react";
import "./login.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase";
import { useState } from "react"
import { AppContext } from "../../context/AppContext";
import Loader from "../../components/loader/Loader";

export default function Login() {
    const {setUser, loading, setLoading} = useContext(AppContext)
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [err, setErr] = useState()
    const [cancel, setCancel] = useState(true)

     
    //A function that handles login using firebase
    const handleSubmit = async (e) => {
      e.preventDefault()
      const email = e.target[0].value
      const password = e.target[1].value
  
      try{
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
        setLoginSuccess(true)
        setErr(false)
        setTimeout(() => {
          setLoading(false)
          setUser(true)
        }, 2000)
      } catch(err) {
        setErr(true)
      }
    }
    
    //function to close notice modal
    const handlCancel = () => {
        setCancel(false)
    }
  
  
  return (
   <>
     {loading ? <Loader /> : 
     (<div className="login">
        {cancel &&
         <div className="notice">
            <span className="cancel" onClick={handlCancel}>X</span>
            <h1>Hey user!</h1>
            <p>Use this credentials to login</p>
            <p>Email: <b>user@example.com</b></p>
            <p>Password: <b>1Password</b></p>
        </div>}
       <div className="loginWrapper" >
       <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
        className="loginInput" 
        type="email"
        name="email"
        placeholder="Email"
        />
        <label>Password</label>
        <input 
        className="loginInput" 
        type="password"
        name="password"
        placeholder="Password"
        />
        <button className="loginButton" type="submit" disabled={loginSuccess}>Login</button>
        { err ? <span style={{color:"red", marginTop:"10px"}}>Something went Wrong</span> : loginSuccess && <span style={{color:"green", marginTop:"10px"}}>Login Successful...</span> }
      </form>
     {!loginSuccess && <p style={{color:"orangered", marginTop:"10px"}}>Please Login to continue...</p>}
       </div>
    </div>)}
   </> 
  )
}

















