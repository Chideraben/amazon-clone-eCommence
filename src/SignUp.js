import "./SignUp.css"
import React, {useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { auth } from "./firebase";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider , signInWithPopup, updateProfile} from "firebase/auth"
function SignUp() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState('')
    const [PasswordError , setPasswordError] = useState("")
    const [ emailError, setEmailError] = useState("")
    const [loading, setLoading] = useState(false)

    
   
        setTimeout(() => {
            setLoading(false)
        },3000)
        
      
   
   
        const register =e => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth,email,password)
            .then((auth) => {
                //succesfully created a new user with email and password
                    navigate('/checkout')
            })
            .catch(error=> alert(error.message));
            toast.success("Sign Up successfull")
        }
   
    const handleEmailBlur =(e)=>{
        if(
            e.target.value === " " ||
            !e.target.value.includes("@")||
            !e.target.value.includes(".com")
        ){
            setEmailError("Please enter a valid email address.")
        } else{
            setEmailError("")
        }
    }
    const handlePasswordBlur =(e)=>{
        if( e.target.value === " " )
        {
            setPasswordError("Please enter your password.")
        } else if(e.target.value.length < 4 ){
           setPasswordError("Password is too small.")
        }
        else{
            setPasswordError("")
        }
    }

    
    return(
        
        <div className="login">
           
              
                    <Link to="/">
                        <img 
                            className="login_logo"
                            alt="Amazon"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                        />
                    </Link>
            


                        <div className="login_container">
                            <h1>Sign-Up</h1>

                            <form>
                             
                                <h5>E-mail</h5>
                                <input type="text"
                                    value={email} 
                                    onChange={e =>setEmail(e.target.value)}
                                    onBlur={handleEmailBlur}
                                    required    
                                />
                                {emailError && (<div className="error_message">{emailError}</div>)}
                                <h5>Password</h5>
                                <input type="password" 
                                    value={password} 
                                    onChange={e =>setPassword(e.target.value)}
                                    onBlur={handlePasswordBlur}
                                    required
                                    
                                />
                              {PasswordError && <div className="error_message">{PasswordError}</div>}
                             {/* <button type="submit"  className="login_signInButton">Sign up with Google</button>*/}
                            </form>

                            <p>
                              By signing-in you agree to the AMAZON CLONE Condition of Use & Sale. Please see our Privacy Notice,
                              our Cookies Notice and our Interest-Based Ads Notice. 
                            </p>
                            
                                <button className="login_registerButton" onclick={ register}>Create  Amazon Account</button>
                        </div>
                      <ToastContainer/>
            
              
                
           
        </div>
    )
}
export default SignUp