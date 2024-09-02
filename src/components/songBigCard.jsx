import React from "react"
import { FaPlayCircle, FaSpotify } from "react-icons/fa"
import {FaHeart,  FaRegHeart} from 'react-icons/fa6'
import { useTheme } from "./context"
export default function SongCard (prop) {
  const {playAudioClick,setCurrentIndex,togglePlay} = useTheme();
  return (
    <div className="w-56 shadow-sm shadow-green-500 group sm:w-44 sm:h-56  h-16 flex sm:block transition-all overflow-hidden rounded-md bg-black">
      <div className="w-24 sm:w-full sm:h-40 overflow-hidden">
        <p className="absolute hidden sm:flex text-lg h-6 w-44 px-0.5 mt-1  text-green-500 opacity-0 group-hover:opacity-80 z-10 rounded-full justify-between -translate-y-6 group-hover:translate-y-0 transition-all items-center">
        <span className="hidden sm:block bg-black rounded-full p-0.5 " onClick={()=>{}}><FaSpotify/></span>
        <span className="hidden sm:block bg-black rounded-full p-0.5 " onClick={()=>{}}><FaRegHeart/></span>

          
          </p>
        <img src={prop.image} alt={prop.name} className="sm:h-40 sm:w-full group-hover:brightness-50 h-16 w-16 shadow-sm sm:shadow-white rounded-md"/>
        <p className="absolute  text-2xl text-green-500 opacity-0 px-1  w-6 group-hover:opacity-100 sm:flex cursor-pointer ml-3 sm:ml-0 group-hover:sm:-mt-8 transition-all -mt-12 sm:-mt-0 flex justify-between rounded-full">
          <span className="sm:left-36  absolute bg-black rounded-full p-0.5 " onClick={()=>{togglePlay(prop.index);setCurrentIndex(prop.index)}}><FaPlayCircle /></span>
        </p>
      </div>
      <div className="w-full px-2 text-white flex flex-col ">
        <h3 className="font-semibold max-h-6 overflow-hidden sm:max-h-max sm:overflow-auto capitalize">{prop.name}</h3>
        <p className="max-h-8 sm:max-h-max text-sm text-gray-300">{prop.artist}</p>
      </div>
      <div className="text-white sm:hidden flex items-center justify-center">
      <span className="text-lg hover:text-green-400 cursor-pointer rounded-full p-0.5 " onClick={()=>{}}><FaRegHeart/></span>
      </div>
    </div>
  )
};