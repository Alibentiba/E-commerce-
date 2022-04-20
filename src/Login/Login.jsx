import React, { useState } from 'react'
import '../Login/Login.css'
import {Link} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";
import logo1 from "./logo1.png"
 import {auth} from "../firebase-config"


const Login = () => {
const [creeEmail,setrcreeEmail]=useState("")
const [creePassword,setrcreePassword]=useState("")
const [loginEmail,setloginEmail]=useState("")
const [loginPassword,setrlogingPassword]=useState("")
const [user,setuser]=useState({})
onAuthStateChanged(auth,(currentUser)=>{setuser(currentUser)})

const login=async()=>{try{const user= await signInWithEmailAndPassword(auth,loginEmail,loginPassword)}catch{console.log("Loign faild ")}}



  return (
    <div className='Login'>
<div className='Login-comp'>
        <p className='login-walcom'>Walcom to your Websit .</p>
        <img  src={logo1} alt='logo' className='login-logo'/>
       <input className='componnet' type="text" placeholder='Email' onChange={(event)=>{setloginEmail(event.target.value)}} /> 
       <input className='componnet' type="Password" placeholder='Password' onChange={(event)=>{setrlogingPassword(event.target.value)}}/>  
       {/* <button className='componnet' onClick={creeuser}>cre acount</button> */}
       <button className='componnet' onClick={login}>Log in</button>


       <span className='Login-span'> <Link to="/" className='header-link'><p>forget passwor?</p></Link> 
       <Link to="/" className='header-link'><p>cree account</p></Link> </span>
     
      <p>{user?.email}</p>
       </div>
    
    </div>
  )
}

export default Login