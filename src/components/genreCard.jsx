import React from "react"

export default function Genre (props) {
    const colorArray = ['#2f450b','#0a0','#f88','#66f','#bc046f','#761111','#f0a','#70f','#f85','#e26302']
    let RandomNum = Math.floor(Math.random()*10);//${colorArray[RandomNum]}
   // console.log(colorArray,RandomNum,colorArray[RandomNum]);
    
  return (
    <div className={`sm:w-44 w-56 sm:h-44 h-16 transition-all rounded-md overflow-hidden  text-white`} style={{backgroundColor:colorArray[RandomNum]}}>
        <div className="p-3 z-30 text-xl font-semibold absolute">
        Podcast
      </div>
        <div className="overflow-hidden transition-all p-2">
            <div className="sm:h-40 sm:w-36 translate-x-12 hover:scale-105 transition-all sm:translate-y-12 translate-y-11 overflow-hidden rotate-[65deg] z-0">
        <img src="./public/travel1.jpg" alt="" className="h-36 w-36 rounded-xl"/>
      </div>
      </div>
      
     
    </div>
  )
};