import React, { useEffect, useState } from "react"
import { useTheme } from "./components/context"
import SongCard from "./components/songBigCard.jsx";

export default function AllSongs (props) {
    const [allSongs,setAllSongs] = useState([])
     useEffect(()=>{
        setAllSongs(props.arrSong);
        //console.log(props.arrSong);
        
     },[props])
    return (
    <div className="w-full  h-auto py-5 bg-gray-900 flex flex-row flex-wrap justify-center  items-center gap-5 sm:gap-5">
       { props.arrSong.length ==0 ? Array.from({length:30}).map((_,i)=>(
        <div className="w-56 load-animation sm:w-44 sm:h-56  h-16 flex sm:block overflow-hidden rounded-md bg-black" key={i}>
        <div className="w-24 sm:w-full sm:h-40 bg-gray-800 rounded-lg">
        </div>
        <div className="w-full p-1 flex flex-col gap-1">
          <h3 className="bg-gray-800 h-8 rounded-md"></h3>
          <p className="mr-4 bg-gray-800 h-6 rounded-md"></p>
        </div>
        <div className="absolute"></div>
      </div>
       )):
       
       allSongs.map((song,i)=>(
         <SongCard key={i} index={i} image={song.song_image} name={song.name} artist={song.artist} />
       ))
       }
    </div>
  )
};