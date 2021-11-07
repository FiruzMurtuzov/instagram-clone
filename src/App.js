
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import {useState} from 'react'
function App() {
  const [Yeh,setYeh] = useState(false)
  const [B,setB] = useState()
  const [Yeh2,setYeh2] = useState(false)
  const [B2i,setB2i] = useState()
  const [Ah,setAh] = useState(false)
  
  return (
    <div className="App">
    
      <Main Yeh={Yeh} setYeh={setYeh}  B={B} setB={setB} Yeh2={Yeh2} setYeh2={setYeh2}  B2i={B2i} setB2i={setB2i} Ah={Ah} setAh={setAh}/>
    <Footer/>
    </div>
  );
}

export default App;
