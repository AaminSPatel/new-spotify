import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [path, setPath] = useState("http://localhost:7000/");
  const [sidebar, setSidebar] = useState(window.innerWidth > 770);
  const [allSongs, setAllSongs] = useState([]);
  const [allArtist, setAllArtist] = useState([]);
  const [audio,setAudio] = useState(null);
  const [isPlaying,setIsPlaying] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(null);
//Fetching All songs From backend
  useEffect(() => {
    fetch(path + "songs")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.length > 0) {
          setAllSongs(data);
        } else {
          console.log("No data present in the database");
        }
      });
  }, []);

//Fetching All Artist From backend
  useEffect(() => {
    fetch(path + "artist")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.length > 0) {
          setAllArtist(data);
        } else {
          console.log("No data present in the database");
        }
      });
  }, []);

//Checking and setting audio 
 useEffect(()=>{
    if(allSongs.length > 0){
     console.log(allSongs[0].song_path);
    let newAudio = new Audio(allSongs[0].song_path);
    setAudio(newAudio)

    //Adding eventlisteners to update the playing state
    newAudio.addEventListener('play',()=>setIsPlaying(true));
    newAudio.addEventListener('pause',()=>setIsPlaying(false));
    newAudio.addEventListener('ended',()=>setIsPlaying(false));

    return()=>{
      // Cleanup event listeners when component unmounts
    newAudio.removeEventListener('play',()=>setIsPlaying(true));
    newAudio.removeEventListener('pause',()=>setIsPlaying(false));
    newAudio.removeEventListener('ended',()=>setIsPlaying(false));

    }
 }
 },[allSongs])

 function playAudioClick (audio){
   audio.play();
   setIsPlaying(true)
    //console.log('Play Clicked',audio,currentIndex);
    //setCurrentIndex(index);
  /*   if(currentIndex === index){
        if(isPlaying){
            console.log('Play tha to nhi chalaya same index he');
            audio.pause();           
            return;
        }
        else{
            let newAudio = new Audio(allSongs[index].song_path);
            setAudio(newAudio)
             return audio.play().then(()=>{
                console.log('Play kiya he same index he');
            }).catch((error)=>{
                console.log('Error aya chalane me',error);
            })
        
        }
          
    }
    else{
        if(isPlaying){
        console.log('Play tha to nhi chalaya index same nahi he');
        audio.pause();
        setTimeout(()=>{
            audio.play();
        },100)
        return;
    }
    else{
        let newAudio = new Audio(allSongs[index].song_path);
        setAudio(newAudio) 
         audio.play().then(()=>{
            console.log('Play kiya he index same nhi he');
        }).catch((error)=>{
            console.log('Error aya chalane me',error);
        })
    }
       
    }
     */
    
}
function PauseAudio(audio){
    audio.pause();
    setIsPlaying(false)

}
   function togglePlay(index){

    if(allSongs.length > 0 && currentIndex !== index){
        PauseAudio(audio)
        console.log(allSongs[index].song_path);
       let newAudio = new Audio(allSongs[index].song_path);
       setAudio(newAudio)
   /* 
       //Adding eventlisteners to update the playing state
       newAudio.addEventListener('play',()=>setIsPlaying(true));
       newAudio.addEventListener('pause',()=>setIsPlaying(false));
       newAudio.addEventListener('ended',()=>setIsPlaying(false));
   
       return()=>{
         // Cleanup event listeners when component unmounts
       newAudio.removeEventListener('play',()=>setIsPlaying(true));
       newAudio.removeEventListener('pause',()=>setIsPlaying(false));
       newAudio.removeEventListener('ended',()=>setIsPlaying(false));
   
       } */}
        if(currentIndex === index){
            if(isPlaying){
                PauseAudio(audio);
                //setIsPlaying(!isPlaying)
            }
            else{
                playAudioClick(audio)
                //setIsPlaying(!isPlaying)
            }
        }
        else{
          if(isPlaying){
            PauseAudio(audio);
            //setIsPlaying(!isPlaying)
          }
          playAudioClick(audio)
          //setIsPlaying(!isPlaying)
        }
   } 
 
/*  allSongs.map((song,i)=>{
    console.log(song.song_path);
    
 })
  */
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }
  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        path,
        sidebar,
        setSidebar,
        allSongs,
        allArtist,playAudioClick,setCurrentIndex,togglePlay
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeContextProvider };
