import React from 'react'
import owais from './owais.jpg'
import './middlemain.css'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';



const Middlemain = (props) => {




  return (
    <div className='middlemain mt-0 ms-2 ms-sm-0 mt-lg-5 mb-lg-5 '>
     <div className='pic ' style={{boxSizing:'border-box'}}>
     <img src={owais}/>
     </div>
      {props.children}
    </div>
  )
}

export default Middlemain
