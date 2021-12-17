import React from 'react'
import './forgotpsw.css'
import icon from '../assets/icon.png'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useAuth } from '../context/auth'
export default function Passwordreset() {
const [Yeh, setYeh] = useState()
const [B, setB] = useState()
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
    setEmail(e.target.value)
    setB(e.target.value.length) 
    
}
const [email, setEmail] = useState()
const {forgotPassword} = useAuth()
function sendCode(e){
    e.preventDefault()
    forgotPassword(email)
    .then(response => alert('Reset code sent to email'))
    .catch(error=>console.log(error.message))
}
    return (
        <div className="forgotPassword">
            <div className="resetPswForm">
                <img src={icon}className="iconTop"></img>
           
            <div className="toper">
                <p className="headerText">Trouble Logging In?</p>
                <p className="pText">Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
            </div>
            <form onSubmit={sendCode}>
            <div className="emailDiv">
                       <label className="Email">
                           <span id="span" className={Yeh ? "span2 span" : "span"}>Phone number,username or email</span>
                           <input id="inp" type='email'onFocus={toggle} onBlur={toggle2} onChange={che}  minLength='1'maxLength='80' className="emailInput" aria-label="Phone number,username or email" aria-required="true" required></input>

                       </label>
                       <div class="banner"></div>
                   </div>
                <button type="submit" className='lol'>Send Login Link</button>
            </form>


            <div className="or">
                       <div className="or1"></div>
                       <div className="or2">OR</div>
                       <div className="or3"></div>
                   </div>
            <Link to='/register' className='link'>Create new Account</Link>


            <div className="Bottom">
                <Link to='/login' className="Link">
                    Back to the Login
                </Link>
            </div>

        </div> </div>
    )
}
