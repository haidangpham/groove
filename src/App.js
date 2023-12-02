import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, createContext, useEffect, useRef, useState } from "react";

import publicRoutes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import songs from "./assets/tracks";


export const TrackContext = createContext();
export const NavContext= createContext();
function App() {
    const globalAudioRef= useRef()
    const [isPlaying, setIsPlaying]= useState(false)
    const [queuedTracks, setQueuedTracks]= useState(["31e5f3c5"])
    const [unshuffledQueue, setUnshuffledQueue]= useState(["31e5f3c5"])
    const [playingTrack, setPlayingTrack] = useState("31e5f3c5");
    const [playingPlaylist, setPlayingPlaylist] = useState(null);
    const [playingTrackIndex, setPlayingTrackIndex]= useState(0);
    const [navList, setNavList]= useState([]);
    const [prevNavList, setPrevNavList]= useState([])
    const [isShuffled, setIsShuffled]= useState(false);

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
    //get track
    const track= songs.find((song)=> song.uniqueId ===playingTrack)

    //set global playing state
    const playingItems = {
        playingTrack: playingTrack,
        playingPlaylist: playingPlaylist,
    };
    
    //set isPlaying state
    useEffect(()=>{
        if(globalAudioRef.current.paused){
            setIsPlaying(false)
            document.title = "Groove - Experience music world.";
        }else{
            setIsPlaying(true)
        }
    }, [globalAudioRef.current?.paused, isPlaying])
  
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

    //Shuffle Handler
    const shuffle = (playlist) => {
        if (!isShuffled) {
          const findIndex = unshuffledQueue.indexOf(playingTrack);
          setPlayingTrackIndex(findIndex);
          return unshuffledQueue;
        }
        // Save original queue before shuffle
        setUnshuffledQueue(playlist);
        // Slice the playlist based on whether it's the same as queuedTracks
        const slicedPlaylist = queuedTracks === playlist ? playlist.slice(playingTrackIndex + 1) : playlist.slice(playingTrackIndex);
        // Shuffle the slicedPlaylist using Fisher-Yates algorithm
        const shuffled = [...slicedPlaylist];
        let currentIndex = shuffled.length, randomIndex;
        while (currentIndex > 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
        }
        // Insert the playing track to keep it playing
        const finalShuffled = queuedTracks === playlist ? [playingTrack, ...shuffled] : shuffled;
        setPlayingTrackIndex(0);
        return finalShuffled;
      };

    useEffect(()=>{
        setQueuedTracks(shuffle(queuedTracks))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isShuffled])

    //Play Pause Of Playlists
    const playlistPlayPause = (playlistData) => {
        //if different playlist
        if (playlistData.uniqueId !== playingItems.playingPlaylist) {
            setPlayingPlaylist(playlistData.uniqueId);
            setPlayingTrackIndex(0)
            //if shuffle
            if(isShuffled){
                setQueuedTracks(shuffle(playlistData.songIds))
            }else{
                setQueuedTracks(playlistData.songIds)
            }
            setIsPlaying(true)
        } else {
          globalAudioRef.current[isPlaying ? 'pause' : 'play']();
          setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        }

    };

    const songPlayPause = (songData, index, playlistId, songIds) => {
        //function for Single Tracks
        if(!songIds){
            
            setQueuedTracks([songData.uniqueId])
            setPlayingTrackIndex(0)
            setPlayingPlaylist(null)
            globalAudioRef.current[isPlaying ? "pause" : "play"]();
            setIsPlaying(!isPlaying)
            return
        }
        //function for Tracks in Playlists
        const isSamePlaylist = playlistId === playingItems.playingPlaylist;
        const isSameTrack = songData.uniqueId === playingItems.playingTrack;
        if (isSamePlaylist) {
            if (isSameTrack) {
                setIsPlaying((prevIsPlaying) => !prevIsPlaying);
            } else {
                updatePlayingTrackIndex(index);
                updatePlayingTrack(queuedTracks[playingTrackIndex]);
                globalAudioRef.current.play()
            }          
        } else {
            updatePlayingPlaylist(playlistId);
            updateQueuedTracks(songIds);
            updatePlayingTrackIndex(index);
            updatePlayingTrack(queuedTracks[playingTrackIndex]);
            globalAudioRef.current.play();
        }
    };

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
    const toggleIsShuffled= ()=>{
        setIsShuffled(!isShuffled)
    }
    //
    return (
        <Router>
            <div className="App">
            <audio ref={globalAudioRef} src={track.src} onEnded={autoPlay} volume="0.5"/>
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
                                            isShuffled,
                                            setIsPlaying,
                                            updatePlayingTrack,
                                            updatePlayingPlaylist,
                                            updateQueuedTracks,
                                            updatePlayingTrackIndex,
                                            playlistPlayPause,
                                            songPlayPause,
                                            toggleIsShuffled,
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
