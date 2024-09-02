//import Artist from "../../../backend/models/artist"
import { useEffect, useState } from "react"
import AllSongs from "./allSongs"
import Artist from "./components/artistCard"
import Genre from "./components/genreCard"
import { useTheme } from "./components/context"
import AllArtists from "./components/allArtist"
import Sidebar from "./components/sidebar"
import Player from "./components/Player/player"


function App() {
  const {path,sidebar,allSongs,allArtist} = useTheme();
 /* const [allSongs,setAllSongs] = useState([])
  const [allArtist,setAllArtist] = useState([])
 
  useEffect(()=>{
    fetch(path+'songs')
    .then(res=>res.json())
    .then(data=>{
        //console.log(data);
        if(data.length > 0){
            setAllSongs(data);
        }   
        else{
            console.log('No data present in the database');   
        }
    })
},[])
 useEffect(()=>{
    fetch(path+'artist')
    .then(res=>res.json())
    .then(data=>{
        //console.log(data);
        if(data.length > 0){
            setAllArtist(data);
        }   
        else{
            console.log('No data present in the database');   
        }
    })
},[])
  */
  return (
    <>
    <div className="flex w-full h-auto flex-col  sm:flex-row">
      <div className={`${sidebar ? 'lg:w-64 md:w-56 sm:w-20' : 'w-20'} bg-gray-950 overflow-hidden hidden sm:block`}>
        <Sidebar/>
      </div>
      <div className="w-full">
        <AllSongs arrSong={allSongs}/>
        <AllArtists arrArtist={allArtist}/>
        <Genre/>
      </div>
      <div className="">
        
      </div>
    </div>
    <Player/>
      
    </>
  )
}

export default App
