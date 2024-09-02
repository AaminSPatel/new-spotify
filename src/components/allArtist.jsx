import React, { useEffect, useState } from "react"
import Artist from "./artistCard"

export default function AllArtists (props) {
    const [allArtist,setAllArtist] = useState([])
    useEffect(()=>{
        setAllArtist(props.arrArtist);
        //console.log(props.arrArtist);
        
    })
  return (
    <div className="flex gap-5 justify-center items-center flex-row flex-wrap w-full h-auto py-4 bg-gray-900">
        {allArtist.map((artist,i)=>(
                  <Artist name={artist.name} image={artist.image} key={i}/>
        ))}
    </div>
  )
};