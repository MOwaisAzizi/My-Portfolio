import React, { useState } from "react";
import note from './note.png'
import sell from './sell.png'
import lib from './lib.png'
import './Slider.css'

const images = [note,sell,lib]

export default function Slider(){

    const [currentIndex,setCurrentIndex] = useState(0)
    function nextSlide(){
      setCurrentIndex(preIndex=> (preIndex+1) % images.length)
    }
    function prevSlide(){
      setCurrentIndex(preIndex=> preIndex === 0 ? images.length-1 : preIndex-1)
    }

    return(
        
        <div className="slider">

    <div className="slides" style={{transform:`translateX(-${currentIndex * 100}%)`}}>
      {
        images.map((image,index)=>{
          <div className="slide" key={index}>
          <img src={image} alt={`slide ${index+1}`} className="img-slide"/>
          </div>
        })
      }
    </div>

      <button onClick={prevSlide} className="arrows arrow-left">&larr;</button>
    <button onClick={nextSlide} className="arrows arrow-right">&rarr;</button>
   </div>
    )
}