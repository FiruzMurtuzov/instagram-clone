import React from 'react'
import './header.css'
import logo from '../assets/instagram.png'
import {AiOutlineCloseCircle} from 'react-icons/all'
import { useState } from 'react'
import {GrHomeRounded} from 'react-icons/gr'
import {RiMessengerLine} from 'react-icons/all'
import SearchBox from './searchBox.js'
import { Link } from 'react-router-dom'
import {ImCompass2} from 'react-icons/all'
import {AiOutlineHeart} from 'react-icons/all'
import {CgAddR} from 'react-icons/all'
import DropDownmenu from './dropDownmenu'
export default function Header({setRecent,setDrop,dropDown,setPosted}) {
    function asaa(){
        setPosted(true)
    }
    const [close, setClose] = useState(false)
    const ehhg = ()=>{
        setClose(true)
         setRecent(true)}
    const ehhg2 = ()=>{
        setClose(false) 
        setRecent(false)}
        const aca = ()=>{
            setDrop(!dropDown)
        }
        const aca2 =()=>{
            setDrop(false)
        }
    return (
        <div className="header">
            <div className="innerHeader">
                <div className="logopart">
            <img src={logo} className="headerLogo"></img>
            </div>
            <div className="searchBar">
            <div className="banner">
    
    </div>
                <input className="searchBox" type="text" placeholder="Search" onFocus={ehhg} onBlur={ehhg2}/>
                
    <div className={close ? 'banner2' : 'hideban'}>
    <AiOutlineCloseCircle className="close" onc></AiOutlineCloseCircle>
    </div>

               
            </div>
            <div className="nav">
                <div className="navItem">
                <Link to=''><GrHomeRounded className='item'/></Link>
                </div>
                <div className="navItem">
                <Link to=''><RiMessengerLine className='item'/></Link>
                </div>
                <div className="navItem special" onClick={asaa}>
                <Link to=''><CgAddR className='item'/></Link>
                </div>
                <div className="navItem">
                <Link to=''><ImCompass2 className='item'/></Link>
                </div>
                <div className="navItem">
                <Link to=''><AiOutlineHeart className='item'/></Link>
                </div>
                <div className="profilePhoto"  onClick={aca} onBlur={aca2}>
                    <div className="profilePhotoinner">
                        </div>
        
                </div>


                </div>
                </div>
           
               
        </div>
    )
}
