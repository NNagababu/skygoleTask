

import React,{useState} from "react";
import {auth} from './config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import Login from "./Login";
import '../App.css'


function Signup(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    function singupHandle(){
        createUserWithEmailAndPassword(auth,email,password)
        .then((err)=>{
            setError("Successfully Sign Up")
            setEmail('')
            setPassword('')
            console.log('signUp')
        })
        .catch(err=>{
            if (err.code === "auth/email-already-in-use") {
                setError("The email address is already in use")
            
              } else if (err.code === "auth/invalid-email") {
                  setError("The email address is not valid");
                 
              } else if (err.code === "auth/operation-not-allowed") {
                  setError("Operation not allowed");
              } else if (err.code === "auth/weak-password") {
                  setError("The password is too weak.");
              }else if(err.code === "auth/missing-password"){
                setError("Set your password")
              }
              
            console.log(err)
    
        })
    }


return (
    <div className="App">
        {
            error==="Successfully Sign Up"?<Login/>:
            <>
            <h1>Sign Up</h1>
        <form className="App">
            <label className="mar">
                Email:
                <input className="mar" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </label>
            <label className="mar">
                Password:
                <input className="mar" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </label>
            <button className="btn csignup" type="button" onClick={singupHandle} >Sign Up</button>
        </form>
        <h1 className="err">{error}</h1>
        <button className="btn csignin" onClick={e=>setError("Successfully Sign Up")}>Sign In</button>
            </>
        }
        
    </div>
)

};

export default Signup;