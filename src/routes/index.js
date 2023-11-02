import configs from "../configs/configs";

import Home from "../pages/HomePage";
import Search from "../pages/SearchPage";
import Playlist from "../pages/PlaylistPage/PlaylistPage";
import ProfilePage from "../pages/ProfilePage";
import TrackPage from "../pages/TrackPage";
import AlbumPage from "../pages/AlbumPage";

const publicRoutes=[
    {path: configs.routes.home, component: Home},
    {path: configs.routes.search, component: Search},
    
    {path: configs.routes.track, component: TrackPage},
    {path: configs.routes.playlist, component: Playlist},
    {path: configs.routes.album, component: AlbumPage},

    {path: configs.routes.artist, component: ProfilePage},
    {path: configs.routes.profile, component: ProfilePage},
]
    

export default publicRoutes