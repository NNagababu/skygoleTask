
import React,{useState} from "react";
import {auth} from './config'
import { signInWithEmailAndPassword } from "firebase/auth";
import Home from "./Home";
import '../App.css'



function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError]=useState('')
    
    

    function singHandle(){
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            setEmail('')
            setPassword('')
            setError('success')
            console.log('signIn')
          
        })
        .catch(err=>{
            if(err.code === "auth/wrong-password"){
                setError("The password is not valid")
                
            }
            else if(err.code === "auth/missing-password"){
                setError("Enter Password")
            }
            else if(err.code === "auth/operation-not-allowed"){
                setError("Operation not allowed.");
            }
            else if(err.code === "auth/invalid-email"){
                setError("The email address is not valid.");
            }
            console.log(err)})
    }



return (
    
    <div className="App">
    {error==='success'?<Home/>:
    <>
    <h1>Login</h1>
    <form>
        <label>
            Email:
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={singHandle} >Sign In</button>
    </form>
    <h1 className="err">{error}</h1>
   
    </>
    }
    
       
    
</div>

       
)

};

export default Login;


