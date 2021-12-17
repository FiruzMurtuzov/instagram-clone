import React from 'react'
import './dropDown.css'
import {CgProfile} from 'react-icons/cg'
import {RiSettings2Line} from 'react-icons/ri'
import {BiLabel} from 'react-icons/bi'
import { useAuth } from '../context/auth'
import {HiSwitchHorizontal} from 'react-icons/hi'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router'
export default function DropDownmenu() {
    const {logout} = useAuth()
    const {currentUser} = useAuth()
 function logouta(){
   
    return <Redirect to='/login'></Redirect>
 
    

    logout()
  

    }
    return (
        <div className="dropDownMenu">
            <div className="yeah">

            </div>
            <div className="dropDownItem">
                <CgProfile  className="icona"/>
                <p>Profile</p>
                </div>
                <div className="dropDownItem">
                <RiSettings2Line className="icona"/>
                <p>Settings</p>
                </div>
                <div className="dropDownItem">
                <BiLabel className="icona icona2"/>
                <p>Saved</p>
                </div>
                <div className="dropDownItem">
                <HiSwitchHorizontal className="icona"/>
                <p>Switch accounts</p>
                </div>
                <div className="dropDownItem log">
                    <p onClick={logouta}>Log Out</p>
                    </div>

               

        </div>
    )
}
