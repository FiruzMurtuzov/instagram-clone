
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Content from './components/content';
import {useState} from 'react'
import {  onSnapshot,collection } from "firebase/firestore"; 
import {useEffect } from 'react'
import db from './firebase'
import Passwordreset from './components/passwordreset';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Register from './components/register';
import PrivateRoutes from './components/privateRoutes';
import AuthContextProvider from './context/auth';
function App() {
  const [posted, setPosted] = useState(false)
  const [Recent, setRecent] = useState(false)
  const [Yeh,setYeh] = useState(false)
  const [page, setPage] = useState('')
  const [B,setB] = useState()
  const [Yeh2,setYeh2] = useState(false)
  const [dropDown,setDrop] = useState()
  const [B2i,setB2i] = useState()
  const [Ah,setAh] = useState(false)
  const [User,setUser] = useState('')
  return (
    <div>
<AuthContextProvider>
<Router>
    <div className="App">
      <Switch>
      <PrivateRoutes exact path='/'   setPage={setPage}>
        <Header setRecent={setRecent} setDrop={setDrop} setPosted={setPosted}dropDown={dropDown}/>
        <Main Recent={Recent}setUser={setUser} User={User} dropDown={dropDown} posted={posted} setPosted={setPosted}/>
        </PrivateRoutes>
      
     
<Route path='/register'><Register  Yeh={Yeh} setYeh={setYeh}  B={B} setB={setB} Yeh2={Yeh2} setYeh2={setYeh2}  B2i={B2i} setB2i={setB2i}    Ah={Ah} setAh={setAh}/></Route>
        <Route path='/login' >    <Content page={page} Yeh={Yeh} setYeh={setYeh}  B={B} setB={setB} Yeh2={Yeh2} setYeh2={setYeh2}  B2i={B2i} setB2i={setB2i}    Ah={Ah} setAh={setAh} /><Footer/></Route>
      <Route path='/passwordreset'><Passwordreset></Passwordreset></Route>
      
         </Switch>
    

    
    </div>
    </Router>
    </AuthContextProvider>
    </div>

  );
}

export default App;
