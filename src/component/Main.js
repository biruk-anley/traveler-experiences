import React from 'react'
import ted from '../images/one.jpg'
import { FaSearchLocation } from "react-icons/fa";


const  main=({content})=> {
  return (
    <div className='main'>
      <div className='left'>
        <img src={`../images/${content.img}`} />
      </div>
      
      <div className='right'>
        <span>
          <FaSearchLocation />  
        </span>
        <span>
          View on Google Map
          
        </span>
        <h2>{ content.headertitle}</h2>
        <h4> {content.date}</h4>
        <p>
          {content.description}
        </p>
      </div>
      
        
      </div>
  )
}

export default main;
