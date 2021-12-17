import React from 'react'
import './sendPost.css'
import { useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import db from "../firebase";

import { useAuth } from '../context/auth';
import {GrFormClose} from "react-icons/all"

export default function AddPost({setPosted,User}) {
    const {currentUser} = useAuth()
    const [curr, setCurr] = useState('')
   
    const [Ahesa, setAhesa] = useState('')
    const handleNew = (downloadURL) => {
     
        setCurr(currentUser.email)
        const collectionRef = collection(db, "posts");
        const payload = { image:downloadURL,likes:0,about:Ahesa,sharedperson:currentUser.email};
        const docRef =  addDoc(collectionRef, payload);
        console.log("The new ID is: " + docRef.id);
      };
const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          handleNew(downloadURL)
          setPosted(false)
        });
      }
    );
  };

  function closeol(){
      setPosted(false)
  }

    
   
  
function ahes(e){
    setAhesa(e.target.value)
}
    return (
        <div className="addPost1">
            <div className="addPost">
                <GrFormClose className="closeaa" onClick={closeol}/>
            <form className="addPost1aa" onSubmit={formHandler}>
            <div className="imageA">
               
                <input type="file"  className="choosefile" minLength="1" required />
               
                <button type="submit"  className="post">Post</button>
                </div>
                </form>
                <div className="caption">
                    <textarea type="text" className="field" onChange={ahes}  minLength="1" placeholder="Write posts'caption" required></textarea>
                    
                </div>
                </div>
        </div>
    )
}
