import configs from "../configs/configs";

import Home from "../pages/HomePage";
import Search from "../pages/SearchPage";

const publicRoutes=[
    {path: configs.routes.home, component: Home},
    {path: configs.routes.search, component: Search},
]
    

export default publicRoutes