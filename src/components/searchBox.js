import React from 'react'
import './box.css'
export default function SearchBox({Recent}) {
    
   
    return (

      
        <div className={Recent ? 'boxx' : 'gobox'}>
            <div class="topLine">
                <p>Recents</p>
            </div>
            <div className="maina">
                <p className="NOREC">No Recent Search</p>
            </div>
        </div>

    )

    
}
