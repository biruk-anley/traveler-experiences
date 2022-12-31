import React from 'react'
import nav from '../images/fill213.png'

const  header=()=> {
  return (

    <div className='nav'>
      <div>
        <img src={nav} />
      </div>
      <div>
        
        <h2>
          My Travel Journal
        </h2>
      </div>
    </div>
  )
}

export default header;
