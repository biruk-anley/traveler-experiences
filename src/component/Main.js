import React from 'react'
import ted from '../images/ted.jpg'
import { FaBeer } from "react-icons/fa";


const  main=()=> {
  return (
    <div className='main'>
      <div className='left'>
        <img src={ted} />
      </div>
      
      <div className='right'>
        <FaBeer />
        <h2>Tewodros</h2>
        <p>View on Google Map</p>
        <h2>Emperor Tewodros</h2>
        <h4> 12,Jan2022 - 34 Dec 2011</h4>
        <p>
          Emperor Tewodros is one of an Infulential king who
          make ethiopian great during 18th.C he is the king that
          change the style for governance of Ethiopia.
        </p>
      </div>
      
        
      </div>
  )
}

export default main;
