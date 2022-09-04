import React, {useState} from "react";
import "./slidercard.css";

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"




export default function SliderCard({}) {
  
const SliderData= [
  
   "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
   "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
 "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
 "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
 "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  
  ]
          const [current, setCurrent] = useState(0)
       const length= SliderData.length
        const nextSlide = () =>
       {
        setCurrent(current ===length -1 ? 0: current + 1)
       }
       const prevSlide= () => {
        setCurrent(current === 0 ? length -1 :current -1)
       }

 if (!Array.isArray(SliderData) || SliderData.length <=0)
 {
   return null;
 }

  return <div id="slider--card">
    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    {SliderData.map((slide,index) => {
    return(
      <div className={index=== current? "slide active" : "slide"}key={index}>
        {index = current && ( <img className="picture" src= {slide} alt="Random Travel Scene"/>)}
   
    </div> 
    )
  })}
    </div>
}



