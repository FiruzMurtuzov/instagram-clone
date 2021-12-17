import React from 'react'
import {FiMoreHorizontal} from 'react-icons/all'
import {AiOutlineHeart} from 'react-icons/all'
import {FaRegComment} from 'react-icons/all'
import {AiFillHeart} from 'react-icons/all'
import {useState} from 'react'
import {FiSend} from 'react-icons/all'
import {  onSnapshot,collection ,addDoc,setDoc,doc} from "firebase/firestore"; 
import { useEffect } from 'react'
import db from '../firebase'
import './postcomponent.css'
export default function PostComp({sharedperson,likes,about,imageUrl,likesaf,id}) {

  
    
    const [liked, setLiked] = useState(false)
    const heart =  liked ? <AiFillHeart className="like"></AiFillHeart>  :<AiOutlineHeart className="like"></AiOutlineHeart>
    const dislik = liked ? -1 : 1;
   function likeEvent(){
       setLiked(!liked)
       

       handleEdit()
   }
   const handleEdit = async () => {
 

    const docRef = doc(db, "posts", id);
    const payload = { likes: likes+dislik,image:imageUrl,about:about,sharedperson:sharedperson};
  
    setDoc(docRef, payload);
  };
  
    return (
        <div className="postOne">
            <div className="postHeader">
                <p className="name">
                    {sharedperson}
                </p>
                <FiMoreHorizontal className="fi"></FiMoreHorizontal>
            </div>
            <div className="image">
                <img src={imageUrl} className='contain' ></img>
            </div>
            <div className="bottom">
                <div className="actions">
                    <div className="like" onClick={likeEvent}>
                {heart}
                </div>
                <FaRegComment className='like' />
                <FiSend className="like"/>
                </div>
                <div className="likes">
                    <p>{likes} likes</p>
                </div>
            </div>
            <div className="post_text">
                <p>{about}</p>
            </div>
        </div>
    )
}
