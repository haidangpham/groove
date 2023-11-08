import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import { createContext, useEffect, useRef, useState } from "react";
import songs from "./assets/tracks";

export const TrackContext = createContext();
function App() {
    const globalAudioRef= useRef()
    const [isPlaying, setIsPlaying]= useState(false)
    const [playingTrack, setPlayingTrack] = useState("31e5f3c5");
    const [playingPlaylist, setPlayingPlaylist] = useState(null);
    const [queuedTracks, setQueuedTracks]= useState([])
    useEffect(()=>{
        if(globalAudioRef.current.paused){
            setIsPlaying(false)
        }else{
            setIsPlaying(true)
        }
    }, [globalAudioRef.current?.paused, isPlaying])
    //set global playing state
    const playingItems = {
        playingTrack: playingTrack,
        playingPlaylist: playingPlaylist,
    };
    //get track
    const track= songs.find((song)=> song.uniqueId ===playingItems.playingTrack)
    const updatePlayingTrack = (newTrackId) => {
        setPlayingTrack(newTrackId);
    };
    const updatePlayingPlaylist = (newPlaylistId) => {
        setPlayingPlaylist(newPlaylistId);
    };
    const updateQueuedTracks = (trackIds) => {
        setQueuedTracks(trackIds);
    };
    const addLoadedMetadataListener = (listener) => {
        if (globalAudioRef.current) {
          globalAudioRef.current.addEventListener('loadedmetadata', listener);
        }
      };

      const playlistPlayPause = (playlistData) => {
        if (playlistData.uniqueId !== playingItems.playingPlaylist) {
          setPlayingPlaylist(playlistData.uniqueId);
          setPlayingTrack(playlistData.songIds[0]);
      
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
    return (
        <Router>
            <div className="App">
            <audio ref={globalAudioRef} src={track.src}/>
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
                                            updateQueuedTracks,
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
