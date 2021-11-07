import React from 'react'
import Content from './content'
export default function Main({Yeh,setYeh,Ah,setAh,B,setB,B2i,setB2i,Yeh2,setYeh2}) {
    return (
        <div className="Main">
            <Content Yeh={Yeh} setYeh={setYeh}  B={B} setB={setB} Yeh2={Yeh2} setYeh2={setYeh2}  B2i={B2i} setB2i={setB2i}    Ah={Ah} setAh={setAh}/>
        </div>
    )
}
