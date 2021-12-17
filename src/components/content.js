import React from 'react'
import logo from '../assets/ehg.png'
import { useState } from 'react';
import { useAuth } from '../context/auth';
import { useRef } from 'react';
import { Redirect, useHistory } from 'react-router';
import Register from './register';
import { Link } from 'react-router-dom';
import useMounted from '../hooks/usemounted';
export default function Content({Yeh,setYeh,Yeh2,setYeh2,Ah,setAh,B,setB,B2i,setB2i,page}) {

const {login} = useAuth()
  const mounted = useMounted()
  const {currentUser} = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [Validin,setLol] = useState(false)
    const [Valid,setValid] = useState(false)
    const [ValidPsw,setPsw] = useState(false)
    const history = useHistory()
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
    setPassword(e.target.value)
    setB2i(e.target.value.length) 
    
    }

const toggle4 = (e)=>{
  
  if(B2i==0){
 setYeh2(false)
  }else{
 setYeh2(true)
   }
}

if(currentUser){
    if(page=='h'){
        history.push('/')
    }
}

const submit = (e)=>{

    e.preventDefault()
  
    console.log(email)
   
    console.log(password)
    login(email,password)
    .then(
        function fd(response){
            console.log(response)
            alert('Successfully Loged in') 
            
         
            history.push('/')
         
            
        }
       
        )
    .catch(
        function funcc(error){
            console.log(error.message)
            if(error.message=="Firebase: Error (auth/email-already-in-use)."){
               alert('This email is already used')
              

             
            } if(error.message==="Firebase: Error (auth/wrong-password)."){
                alert('Incorrect password.')
                
            }
        }
       
    )
    .finally(()=>{})
}


    return (
        
     
     <div className="content">
   
            <div className="contentLeftComponent">
               
                <img src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" className="screenshot"></img>
                <img src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg" className="innerSS"></img>
            </div>
           <div className="Form">
               <div className="FormUp">
               <img src={logo} className="logo"></img>

               <form className="loginForm">
                   <div className="emailDiv">
                       <label className="Email">
                           <span id="span" className={Yeh ? "span2 span" : "span"}>Phone number,username or email</span>
                           <input id="inp" type='email'onFocus={toggle} placeholder="Phone number,username or email" onBlur={toggle2} onChange={che}  minLength='1'maxLength='80' className="emailInput" aria-label="Phone number,username or email" aria-required="true" required></input>

                       </label>
                       <div className="banner"></div>
                   </div>
                   <div className="passwordDiv">
                       <label className="password">
                           <span id="span4" className={Yeh2 ? "span5 span4" : "span4"}>Password</span>
                           <input id="inp2" minLength="7" type='password'onFocus={toggle3} onBlur={toggle4} onChange={che2}  minLength='8'maxLength='80' className="pswInput" aria-label="Password" aria-required="true" required></input>

                       </label>
                       <div className="banner"></div>
                   </div>
                   <button type="submit" onClick={submit} className="loginButton" >Log in</button>

                   <div className="or">
                       <div className="or1"></div>
                       <div className="or2">OR</div>
                       <div className="or3"></div>
                   </div>

                   <div className="facebookLogin">
                       <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" className="facebookIcon"></img>
                       <div  className="ohg" /* onClick={loginfacea} */>Log in with Facebook</div>
                   </div>

                   <Link to='/passwordreset' className="forgotPsw">Forgot Password ?</Link>
               </form>
               </div>

               <div className="formBottom">
                   <p>Dont have an account? <Link to='/register'>Sign Up</Link></p>
               </div>

               <div className='getApp'>
                   <p>Get the app</p>
                   <div className="apps">
                       <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE213E822-8B90-491C-A03F-47A5101AE334%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"></img></a>
                       <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"></img></a>
                   </div>
               </div>
           </div>

        </div>
    )
    
}

