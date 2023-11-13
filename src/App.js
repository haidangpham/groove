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
    const [curIndexNav, setCurIndexNav]= useState(0)
    const [isBackwarded, setIsBackwarded]= useState(false)
    // const [isShuffled, setIsShuffled]= useState(false);
    //set isPlaying state
    useEffect(()=>{
        if(globalAudioRef.current.paused){
            setIsPlaying(false)
        }else{
            setIsPlaying(true)
        }
        
    }, [globalAudioRef.current?.paused, isPlaying])

    //set Nav Index
    useEffect(()=>{
       setCurIndexNav(navList.length -1)
    },[navList])
    useEffect(()=>{
        if(isBackwarded){

        }
    },[])
    const updateNewNavList= ()=>{
       
    }
    const updateIsBackwarded=(bool)=>{
        setIsBackwarded(bool)
    }

    console.log(isBackwarded);


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
    const updateNavList= (param)=>{
        const params= [...navList, param]
        setNavList(params)
    }
    const updateCurIndexNav= (step)=>{
        const index= curIndexNav + step
        if(index < 0 || index === navList.length ){
            return
        }
        setCurIndexNav(index)
        index + 1 < navList.length?setIsBackwarded(true):setIsBackwarded(false)
    }
    const addLoadedMetadataListener = async(listener) => {
        if (globalAudioRef.current) {
            await globalAudioRef.current.addEventListener('loadedmetadata', listener);
        }
      };

    
      //Play Pause Of Playlists
    const playlistPlayPause = (playlistData) => {
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
                                            addLoadedMetadataListener,
                                        }}
                                    >
                                        <NavContext.Provider
                                            value={{navList, curIndexNav,isBackwarded, updateNavList, updateCurIndexNav, updateIsBackwarded}}
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
