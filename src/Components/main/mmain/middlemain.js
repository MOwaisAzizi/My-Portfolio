import React from 'react'
import owais from './owais.jpg'
import './middlemain.css'

const Middlemain = (props) => {

  return (
    <div className='middlemain mt-0 mt-md-1 mt-lg-5 ms-2 ms-sm-0  mb-lg-5 '>
     <div className='pic ' style={{boxSizing:'border-box'}}>
     <img src={owais}/>
     </div>
      {props.children}
    </div>
  )
}

export default Middlemain
