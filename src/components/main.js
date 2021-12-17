import React from 'react'
import Content from './content'
import { useState } from 'react';
import { useAuth } from '../context/auth';
import SearchBox from './searchBox';
import { useHistory } from 'react-router';
import Register from './register';
import Posts from './posts'
import { Link } from 'react-router-dom';

import DropDownmenu from './dropDownmenu';
import RightSide from './rightSide';
import AddPost from './addPost';
export default function Main({Yeh,setYeh,Ah,setAh,B,setB,B2i,setB2i,Yeh2,setYeh2,Recent,dropDown,posted,setPosted,setUser,User}) {
    let addPost;
    const {currentUser} = useAuth()
    const history = useHistory()
  const [ehg, setEhg] = useState('')
 
  const aaa = ()=>{   
       if(currentUser==null){
        
        
    }
    else{
   
    }
}
aaa()

    let button;
    
    
const {logout} = useAuth()
function logouta(){
    logout()
 
history.push("/login")

    }

    if(Recent){
       
            button= <SearchBox Recent={Recent} />
       
       
    }
    else{ }
    let dropdownMenu;
    
    if(dropDown){
dropdownMenu=<DropDownmenu/>
    }else{}
    
    if(posted){
        addPost=<AddPost setPosted={setPosted} User={User}/>
    }else{}
    
    return (
        <div className="Main">
          
           {button}
           {dropdownMenu}
       {addPost}
           <Posts/>
          <RightSide setUserab={setUser}/>
           
        </div>
    )
}
