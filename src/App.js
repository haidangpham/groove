import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useRef, useState } from "react";

import publicRoutes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import songs from "./assets/tracks";


export const TrackContext = createContext();
export const NavContext= createContext();
function App() {
    const globalAudioRef= useRef()
    const [isPlaying, setIsPlaying]= useState(false)
    const [queuedTracks, setQueuedTracks]= useState(["31e5f3c5"])
    const [playingTrack, setPlayingTrack] = useState("31e5f3c5");
    const [playingPlaylist, setPlayingPlaylist] = useState(null);
    const [playingTrackIndex, setPlayingTrackIndex]= useState(0);
    const [navList, setNavList]= useState([]);
    const [prevNavList, setPrevNavList]= useState([])

    // const [isShuffled, setIsShuffled]= useState(false);
    //set isPlaying state
    useEffect(()=>{
        if(globalAudioRef.current.paused){
            setIsPlaying(false)
            document.title = "Groove - Experience music world.";
        }else{
            setIsPlaying(true)
        }
    }, [globalAudioRef.current?.paused, isPlaying])

    //NAV
    useEffect(()=>{
        //update prevList
       if(navList.length >= prevNavList.length){
            setPrevNavList(navList)
        }
    },[navList])
    
    const updateNavList= (location)=>{
        //stop update navList if nav btn is clicked Back/Forwarded
        if((navList.length < prevNavList.length && location === prevNavList[navList.length])|| location === navList[navList.length - 1]){
            return
        }
        const params= [...navList, location]
        setNavList(params)
        if(location !== prevNavList[navList.length]){
            setPrevNavList(navList)
        }

    }
    const modifyNavList= (step)=>{
        if(step < 0){
            const list= navList.slice(0,navList.length - 1)
            setNavList(list)
        }else{
            const list= prevNavList.slice(0,navList.length + 1)
            setNavList(list)
        }
    }
    
    //log


      //AutoPlay
      const autoPlay= ()=>{
        if(playingTrackIndex+1 < queuedTracks.length){
            setPlayingTrackIndex( playingTrackIndex + 1)
            setPlayingTrack(queuedTracks[playingTrackIndex+1])
        }else{
            //no more tracks in queue
            return
        }
        if(isPlaying){
            setTimeout(() => {
                globalAudioRef.current.play();
                setIsPlaying(true)
              }, 1000);
        }
      }
        //update playingTrack when queuedTrack is updated
      useEffect(() => {
        // Update the playingTrack when playingTrackIndex changes
        setPlayingTrack(queuedTracks[playingTrackIndex]);
      }, [playingTrackIndex, queuedTracks]);

    //set global playing state
    const playingItems = {
        playingTrack: playingTrack,
        playingPlaylist: playingPlaylist,
    };

    //get track
    const track= songs.find((song)=> song.uniqueId ===playingTrack)
    //global functions
    const updatePlayingTrack = (newTrackId) => {
        setPlayingTrack(newTrackId);
    };
    const updatePlayingPlaylist = (newPlaylistId) => {
        setPlayingPlaylist(newPlaylistId);
    };
    const updateQueuedTracks = (trackIds) => {
        setQueuedTracks(trackIds);
    };
    const updatePlayingTrackIndex = (index) => {
        setPlayingTrackIndex(index);
    };
    
    const addLoadedMetadataListener = async(listener) => {
        if (globalAudioRef.current) {
            await globalAudioRef.current.addEventListener('loadedmetadata', listener);
        }
      };

    
      //Play Pause Of Playlists
    const playlistPlayPause = (playlistData) => {
        console.log(playlistData);
        if (playlistData.uniqueId !== playingItems.playingPlaylist) {
            setPlayingPlaylist(playlistData.uniqueId);
            setQueuedTracks(playlistData.songIds)
            setPlayingTrackIndex(0)
          if (playingTrack !== playlistData.songIds[0]) {
            globalAudioRef.current.play();
            setIsPlaying(true);
          } else {
            globalAudioRef.current.currentTime = 0;
            if (!isPlaying) {
              globalAudioRef.current.play();
              setIsPlaying(true);
            }
          }
        } else {
          globalAudioRef.current[isPlaying ? 'pause' : 'play']();
          setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        }
    };
    const songPlayPause= (songData) =>{
        setPlayingPlaylist(null)
        setPlayingTrack(songData.uniqueId)
        setQueuedTracks([songData.uniqueId])
        
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        
    }
    //
    return (
        <Router>
            <div className="App">
            <audio ref={globalAudioRef} src={track.src} onEnded={autoPlay}/>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <TrackContext.Provider
                                        value={{
                                            playingItems,
                                            globalAudioRef,
                                            isPlaying,
                                            queuedTracks,
                                            playingTrackIndex,
                                            setIsPlaying,
                                            updatePlayingTrack,
                                            updatePlayingPlaylist,
                                            updateQueuedTracks,
                                            updatePlayingTrackIndex,
                                            playlistPlayPause,
                                            songPlayPause,
                                            addLoadedMetadataListener,
                                        }}
                                    >
                                        <NavContext.Provider
                                            value={{navList,prevNavList, updateNavList, modifyNavList}}
                                        >
                                            <DefaultLayout
                                            path={route.path}
                                        >
                                            <Page />
                                        </DefaultLayout>
                                        </NavContext.Provider>
                                        
                                    </TrackContext.Provider>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
