import React from 'react'
import { Redirect, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './register.css'
import logo from '../assets/ehg.png'
import { useState } from 'react'

import metalogo from '../assets/Screenshot_7.png'
import { useAuth } from '../context/auth'
import useMounted from '../hooks/usemounted'
import { auth } from '../firebase'
export default function Register({Yeh,setYeh,Yeh2,setYeh2,Ah,setAh,B,setB,B2i,setB2i}) {
const {register} = useAuth()
   const [usedor, setUsedor] = useState(false)
    const history = useHistory()
    const mounted = useMounted()
     
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState(null)
    const [username, setUsername] = useState('')
    const [issubmitten, setissubmitten] = useState(false)
    
    const [Yeh9, setYeh9] = useState()
    const [B9i, setB9i] = useState()
    const [Yeh10, setYeh10] = useState()
    const [B10i, setB10i] = useState()
const toggle = (e)=>{ 
        setYeh(true)
}

const toggle2 = (e)=>{
if(B==0){
    setYeh(false)
    
}else{
    setYeh(true)
}
}
function che(e){
    setB(e.target.value.length) 
    setEmail(e.target.value)
}



const toggle3 = ()=>{
setYeh2(true)
}
function che2(e){
    setB2i(e.target.value.length) 
    setPassword(e.target.value)
    
    }
const toggle4 = (e)=>{
  
  if(B2i==0){
 setYeh2(false)
  }else{
 setYeh2(true)
   }
}

const toggle8 = ()=>{
    setYeh9(true)
    }
    function che9(e){
        setB9i(e.target.value.length) 
   
        
        }
    const toggle9 = (e)=>{
      
      if(B9i==0){
     setYeh9(false)
      }else{
     setYeh9(true)
       }
    }
   
    
const toggle10 = ()=>{
    setYeh10(true)
    }
    function che11(e){
        setB10i(e.target.value.length) 
        setDisplayName(e.target.value)
        
        }
    const toggle11 = (e)=>{
      
      if(B10i==0){
     setYeh10(false)
      }else{
     setYeh10(true)
       }
    }
const submit = async (e)=>{

    e.preventDefault()
    console.log(email)
   
    console.log(password)
    register(email,password)
    .then(
        function fd(response){
            console.log(response)
            history.push('/')
            setUsedor(true)
            
        }
       
        )
    .catch(
        function funcc(error){
            console.log(error.message)
            if(error.message=="Firebase: Error (auth/email-already-in-use)."){
               alert('This email is already used')
               setUsedor(false)

             
            }else{
                
            }
        }
       
    )
    .finally(()=>{})

    
}


    
    return (
        <div className="register">
            <form className="registerBox" onSubmit={submit}>
            <img src={logo} className="logo1"></img>
            <p className="bannerTopper">Sign up to see photos and videos from your friends.</p>
            <button className='meta'><img src={metalogo}></img>Log in with Facebook</button>
            
            <div className="or">
                       <div className="or1"></div>
                       <div className="or2">OR</div>
                       <div className="or3"></div>
                   </div>

            <div className="emailDiv">
                       <label className="Email">
                           <span id="span" className={Yeh ? "span2 span" : "span" }>Mobile number or Email</span>
                           <input id="inp"  type='email'onFocus={toggle} onBlur={toggle2}onChange={che}  minLength='1'maxLength='80' className="emailInput" aria-label="Phone number,username or email" aria-required="true" required></input>

                       </label>
                       <div class="banner"></div>
                   </div>

                   <div className="nameDiv">
                       <label className="name">
                           <span id="span" className={Yeh9 ? "span2 span" : "span"}>Full Name</span>
                           <input id="inp1" type='text'onFocus={toggle8} onBlur={toggle9} onChange={che9}  minLength='1'maxLength='80' className="nameInput" aria-label="Phone number,username or email" aria-required="true" required></input>

                       </label>
                       <div class="banner"></div>
                   </div>
                   <div className="usernameDiv">
                       <label className="username">
                           <span id="span" className={Yeh10 ? "span2 span" : "span"}>Username</span>
                           <input id="inp3" type='text'onFocus={toggle10} onBlur={toggle11} onChange={che11}  minLength='1'maxLength='80' className="usernameInput" aria-label="Phone number,username or email" aria-required="true" required></input>

                       </label>
                       <div class="banner"></div>
                   </div>
                   
                   <div className="passwordDiv">
                       <label className="password">
                           <span id="span4" className={Yeh2 ? "span5 span4" : "span4"}>Password</span>
                           <input id="inp2" minLength="7" type='password'onFocus={toggle3} onBlur={toggle4} onChange={che2}  minLength='8'maxLength='80' className="pswInput" aria-label="Password" aria-required="true" required></input>

                       </label>
                       <div class="banner"></div>
                   </div>

                 <button type="submit"  className="loginButton2">Sign Up</button>
                  
                   <p className="ppp">By signing up, you agree to our <b>Terms</b> , <b>Data Policy</b> and <b>Cookies Policy</b>.</p>
            </form>
           
            <div class="formBottom2">
                   <p>Already have an account? <Link to='/login'>Log in</Link></p>
               </div>

               <div className='getApp2'>
                   <p>Get the app</p>
                   <div className="apps2">
                       <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE213E822-8B90-491C-A03F-47A5101AE334%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"></img></a>
                       <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"></img></a>
                   </div>
               </div>
        </div>
    )
}
