import React, { useEffect, useState } from "react"
import {  BsCollectionFill } from "react-icons/bs";
import {   FaHome, FaSearch } from "react-icons/fa"
import { useTheme } from "./context";
//import {Link} from 'react-router-dom'
export default function Sidebar (props) {
    const {sidebar,setSidebar} = useTheme()
     useEffect(()=>{
        /* if(window.innerWidth > 770){
            setSidebar(true);
          } */
        window.addEventListener('resize', ()=>{
            if(window.innerWidth > 770){
         setSidebar(true);
       }
       else{
        setSidebar(false);
       }        
       //console.log(window.innerWidth);
        });
      }) 
      function toggleSidebar(){
        if(window.innerWidth > 770){
            setSidebar(!sidebar)
        }
      }
  return (
    <div className={`fixed ${sidebar ? 'sm:w-16 md:w-44 lg:w-52' : 'w-20'} h-full text-white overflow-hidden`}>
      <div className="w-full h-28  flex items-center justify-center">
        <ul className="flex flex-col gap-2 p-2 w-full">
            <li className="flex gap-2 p-1 sm:p-3 justify-center items-center w-full bg-gray-800 rounded-full"><FaHome/> <span className={`${sidebar?'block':'hidden'}`}>Home</span> </li>
            <li className="flex gap-2 p-1 sm:p-3 justify-center items-center w-full bg-gray-800 rounded-full"><FaSearch/><span className={`${sidebar?'block':'hidden'}`}>Search</span>  </li>
        </ul>
      </div>
      <div className={`w-full ${sidebar ?'h-auto':''} sm:my-3 flex flex-col gap-3 transition-all`}>
        <div className="w-full flex flex-row justify-between sm:p-0 px-1 items-center gap-2">
            <p className="flex items-center justify-start gap-3 p-1 sm:pl-0.5  text-xl">
                <button className={`${sidebar ?'w-7 h-7' : ' h-10 w-16'} bg-gray-800 rounded-md p-1 flex justify-center items-center`} onClick={toggleSidebar}>
                <BsCollectionFill className="rotate-90 text-xl"/>
                </button>
                <span className={`${sidebar?'block':'hidden'} md:text-base`}>Your Library</span> 
            </p>
        <span className={`${sidebar?'block':'hidden'} h-5 w-5 pb-1 flex items-center justify-center rounded-full bg-gray-700`}>+</span> 
        </div>
        <div className={`${sidebar?'block':'hidden'} py-2 w-full flex flex-row justify-center items-center gap-1`}>
            <ul className="flex flex-row flex-wrap justify-evenly w-full gap-2">
                <li className="rounded-full px-3 bg-gray-700" onClick={()=>{}}>Artist</li>
                <li className="rounded-full px-3 bg-gray-700" onClick={()=>{}}>Genre</li>
                <li className="rounded-full px-3 bg-gray-700" onClick={()=>{}}>Songs</li>
                <li className="rounded-full px-3 bg-gray-700" onClick={()=>{}}>Playlist1</li>
                <li className="rounded-full px-3 bg-gray-700" onClick={()=>{}}>Liked</li>
            </ul>
        </div>
        <div className={`${sidebar?'block':'hidden'} w-full flex flex-row justify-center items-center gap-1`}>
        <span className={`${sidebar?'':''}`}>
            
        </span> 
        </div>
      </div>
      <div className={`${sidebar ? 'w-full' : ' w-16 mx-1 '} flex justify-start items-center bg-gray-700 rounded-full `}>
        <div className="w-16 overflow-hidden ">
                <img src="../arij.jpeg" alt="" className="h-16 w-16 rounded-full"/>
        </div>
        <div className={`${sidebar?'block':'hidden'}`}>
            <p className="text-xl font-semibold">Artist</p>
        </div>
      </div>
    </div>
  )
};