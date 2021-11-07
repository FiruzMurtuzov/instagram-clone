import React from 'react'
import logo from '../assets/ehg.png'
import { useState } from 'react';

export default function Content({Yeh,setYeh,Yeh2,setYeh2,Ah,setAh,B,setB,B2i,setB2i}) {
  

    
 
    const [Validin,setLol] = useState(false)
    const [Valid,setValid] = useState(false)
    const [ValidPsw,setPsw] = useState(false)
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
}



const toggle3 = ()=>{
setYeh2(true)
}
function che2(e){
    setB2i(e.target.value.length) 
    
    }
const toggle4 = (e)=>{
  
  if(B2i==0){
 setYeh2(false)
  }else{
 setYeh2(true)
   }
}


const submit = (e)=>{

    e.preventDefault()
    alert(e.target.value)
}


    return (
        
     
     <div className="content">
            <div className="contentLeftComponent">
                <img src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" className="screenshot"></img>
                <img src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg" className="innerSS"></img>
            </div>
           <div className="Form">
               <div class="FormUp">
               <img src={logo} className="logo"></img>

               <form className="loginForm">
                   <div className="emailDiv">
                       <label className="Email">
                           <span id="span" className={Yeh ? "span2 span" : "span"}>Phone number,username or email</span>
                           <input id="inp" type='email'onFocus={toggle} onBlur={toggle2} onChange={che}  minLength='1'maxLength='80' className="emailInput" aria-label="Phone number,username or email" aria-required="true" required></input>

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
                   <button type="submit" onClick={submit} className="loginButton" >Log in</button>

                   <div className="or">
                       <div className="or1"></div>
                       <div className="or2">OR</div>
                       <div className="or3"></div>
                   </div>

                   <div className="facebookLogin">
                       <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" className="facebookIcon"></img>
                       <a href="">Log in with Facebook</a>
                   </div>

                   <a href="" className="forgotPsw">Forgot Password ?</a>
               </form>
               </div>

               <div class="formBottom">
                   <p>Dont have an account? <a href="">Sign Up</a></p>
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

