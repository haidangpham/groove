import configs from "../configs/configs";

import Home from "../pages/HomePage";
import Search from "../pages/SearchPage";
import Playlist from "../pages/PlaylistPage/PlaylistPage";

const publicRoutes=[
    {path: configs.routes.home, component: Home},
    {path: configs.routes.search, component: Search},
    {path: configs.routes.playlist, component: Playlist},
]
    

export default publicRoutes