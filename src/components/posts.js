import React from 'react'
import './posts.css'
import Stories from './stories'
import PostComp from './postComp'

import {  onSnapshot,collection } from "firebase/firestore"; 
import { useState,useEffect } from 'react'
import db from '../firebase'

export default function Posts() {
   
const [state, setState] = useState([])

const [posts, setPosts] = useState([{ image: "Loading...",about:"",likes:'',sharedperson:"", id: "initial" }]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
       
      ),
    []
  );
  
    return (
        <div className="posts">
            <Stories/>
            {posts.map((post)=>{
                return <PostComp about={post.about} id={post.id} imageUrl={post.image} likes={post.likes} sharedperson={post.sharedperson}/>
            })}
            

        </div>
    )
}
