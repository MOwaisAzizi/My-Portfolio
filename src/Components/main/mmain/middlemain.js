import React from 'react'
import owais from './owais.jpg'
import './middlemain.css'
import { useState } from 'react'

const Middlemain = (props) => {

  return (
    <div className='middlemain mt-0 mt-lg-5 mb-lg-5 '>
     <div className='pic ms-3 ms-sm-0' style={{boxSizing:'border-box'}}>
     <img src={owais}/>
     </div>
      {props.children}
    </div>
  )
}

export default Middlemain
