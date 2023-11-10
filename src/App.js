import { HashRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import { createContext, useEffect, useRef, useState } from "react";
import songs from "./assets/tracks";
import { globalPlaylists } from "./assets/data/playlist";

export const TrackContext = createContext();
function App() {
    const globalAudioRef= useRef()
    const [isPlaying, setIsPlaying]= useState(false)
    const [queuedTracks, setQueuedTracks]= useState([])
    const [playingTrack, setPlayingTrack] = useState("31e5f3c5");
    const [playingPlaylist, setPlayingPlaylist] = useState(null);
    // const [isShuffled, setIsShuffled]= useState(false);
    const [currentIndex, setCurrentIndex]= useState(0);
    console.log('re-rendered');
    //set isPlaying state
    useEffect(()=>{
        if(globalAudioRef.current.paused){
            setIsPlaying(false)
        }else{
            setIsPlaying(true)
        }
    }, [globalAudioRef.current?.paused, isPlaying])

    //update playingTrack when queuedTrack is updated
    useEffect(() => {
        if (queuedTracks.length > 0) {
          // Update playingTrack with the first track in queuedTracks
          setPlayingTrack(queuedTracks[currentIndex]);
        }
        
      }, [queuedTracks, currentIndex]);

      //AutoPlay
      const autoPlay= ()=>{
        setCurrentIndex( currentIndex + 1)
        if(isPlaying){
            setTimeout(() => {
                globalAudioRef.current.play();
                
              }, 500);
        }
      }
    //set global playing state
    const playingItems = {
        playingTrack: playingTrack,
        playingPlaylist: playingPlaylist,
    };

    //get track
    const track= songs.find((song)=> song.uniqueId ===playingTrack)
    const updatePlayingTrack = (newTrackId) => {
        setPlayingTrack(newTrackId);
    };
    const updatePlayingPlaylist = (newPlaylistId) => {
        setPlayingPlaylist(newPlaylistId);
    };

    const addLoadedMetadataListener = (listener) => {
        if (globalAudioRef.current) {
          globalAudioRef.current.addEventListener('loadedmetadata', listener);
        }
      };

    
      //Play Pause Of Playlists
    const playlistPlayPause = (playlistData) => {
        if (playlistData.uniqueId !== playingItems.playingPlaylist) {
            setPlayingPlaylist(playlistData.uniqueId);
            setQueuedTracks(playlistData.songIds)
            setCurrentIndex(0)
        
      
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
                                            setIsPlaying,
                                            updatePlayingTrack,
                                            updatePlayingPlaylist,
                                            addLoadedMetadataListener,
                                            playlistPlayPause,
                                        }}
                                    >
                                        <DefaultLayout
                                            path={route.path}
                                        >
                                            <Page />
                                        </DefaultLayout>
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
