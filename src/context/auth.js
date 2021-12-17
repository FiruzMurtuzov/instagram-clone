import {useContext,useEffect,useState,createContext} from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,signInWithRedirect, signOut,sendPasswordResetEmail,updateProfile} from '@firebase/auth'
import { auth } from '../firebase'



export default function AuthContextProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [displayName, setDisplayName] = useState()
   
   
function forgotPassword(email){
    return sendPasswordResetEmail(auth,email,{
        url:'http://localhost:3000/passwordreset'
    })

}
    function register(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
       
            
        }

    
    function login(email,password){
return signInWithEmailAndPassword(auth,email,password)
    }
   // function loginface(){
     //  return signInWithPopup(auth, new FacebookAuthProvider());
    
      
    //}
    function logout(){
        return signOut(auth)
    }

    const value = {
        currentUser,
        register,
        login,
        logout,
        forgotPassword,
       // loginface,
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user,auth) => {
          setCurrentUser(user)
         
          
          


         
        })
    

        
        return unsubscribe
      }, [])

      
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}


const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}