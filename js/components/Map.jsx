import React from 'react'
import ReactDOM from 'react-dom'

import FindCountry from './FindCountry.jsx'
import Information from './Information.jsx'

class Map extends React.Component{
    

    handleMapMove=()=>{

    }
    render(){
        return  <div className='main-div'>
                <h1 className='header'>World Map</h1>
                <FindCountry/>
               </div>
    }
}


module.exports=Map;