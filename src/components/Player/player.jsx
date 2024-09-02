import React, { useState } from "react"
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai"
import { FaBars, FaRegHeart } from "react-icons/fa"
import { FaVolumeHigh } from "react-icons/fa6"
import { HiArrowPathRoundedSquare } from "react-icons/hi2"
import { IoMdPlayCircle } from "react-icons/io"
import { IoPauseCircle } from "react-icons/io5"
import { MdSkipNext, MdSkipPrevious } from "react-icons/md"
import { TiArrowShuffle } from "react-icons/ti"

export default function Player (props) {
    const [fullScreen,setFullScreen] = useState()
    const [isplaying,setIsplaying] = useState(false)
  return (
    <div className="fixed  z-40 flex flex-col gap-1 bottom-0 bg-black text-white w-full h-24">
      <div className="w-full h-2/6 flex justify-center items-end gap-3">
        <h1 className="max-w-48 md:text-2xl text-lg font-semibold">Song Name</h1>
        <p>Artist name</p>
        <p className=" h-5"><FaRegHeart/></p>
      </div>
      <div className="w-full h-2/6 flex justify-center items-center gap-1">
            <div className="w-full flex">
                <div className="w-20 ">Aamin</div>
                <div className="w-full">
                    <input type="range" name="" id=""  max={100}  min={0} className="bg-black accent-green-500 w-full h-1.5 cursor-pointer"/>
                </div>
                <div className="w-20"></div>
            </div>
      </div>
      <div className="w-full h-2/6 flex justify-center items-center gap-1  mb-3">
      <div className="w-44 flex justify-center items-center">
            
        </div>
        
        <div className="w-full flex justify-center items-center">
            <ul className="flex flex-row text-2xl">
            <li onClick={()=>{}} id="shufflebutton">
                    <TiArrowShuffle />
                  </li>
                  <li onClick={()=>{}}>
                    <MdSkipPrevious />
                  </li>
                  <li onClick={()=>{}} id="playbutton">
                    {
                      !isplaying ? <IoMdPlayCircle /> :<IoPauseCircle />
                    }
                  </li>
                  <li onClick={()=>{}} id="playNext">
                    <MdSkipNext />
                  </li>
                  <li id="loopbutten">
                    <HiArrowPathRoundedSquare onClick={() => playLoop()} />
                  </li>
            </ul>
        </div>
        <div className="w-44 flex justify-center items-center">
            <ul className="flex justify-evenly items-center gap-3">
            <li>
                    <FaBars />
                  </li>
                  <li className={``}>
                    
                    <p className={`group h-20 flex justify-end items-center`}>
                      <FaVolumeHigh className="group-hover: "/> 
                      <input type="range" min='0' max='100' className="group-hover:flex hidden absolute  translate-x-12 -translate-y-4 -rotate-0" onChange={(e) => volumeSeek(e)}/>
                    </p>
                    
                    
                  </li>
                  <li onClick={()=>{}}>
                    {fullScreen ? (
                      <AiOutlineFullscreen />
                    ) : (
                      <AiOutlineFullscreenExit />
                    )}
                  </li>
            </ul>
        </div>
        
      </div>
    </div>
  )
};