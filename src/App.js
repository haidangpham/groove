import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import { createContext, useState } from "react";

export const TrackContext= createContext();
function App() {
    const [playingTrack, setPlayingTrack]= useState('31e5f3c5')
    const [playingPlaylist, setPlayingPlaylist]= useState(null)
    const playingItems={
        playingTrack: playingTrack,
        playingPlaylist: playingPlaylist
    }

    const updatePlayingTrack= (newTrackId)=>{
        setPlayingTrack(newTrackId)
    }
    const updatePlayingPlaylist= (newPlaylistId)=>{
        setPlayingPlaylist(newPlaylistId)
    }
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route key={index} path={route.path} element={<TrackContext.Provider value={{playingItems, updatePlayingTrack, updatePlayingPlaylist}}><DefaultLayout path={route.path}><Page /></DefaultLayout></TrackContext.Provider>} />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
