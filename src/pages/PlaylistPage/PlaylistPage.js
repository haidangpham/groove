import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import songs from "../../assets/tracks";
import { globalPlaylists } from "../../assets/data/playlist";

import styles from "./PlaylistPage.module.scss";

import Playlist from "../../layouts/components/Playlist";
import UnifiedPageLayout from "../../layouts/components/UnifiedPageLayout";

const cx = classNames.bind(styles);
function PlaylistPage() {
    // const { playingItems, isPlaying, playlistPlayPause } =useContext(TrackContext);
    const playlistId = useParams();
    const playlistData = globalPlaylists.find(
        (item) => item.uniqueId === playlistId.playlistId
    );
    // //save path name in navList
    // const {updateNavList}= useContext(NavContext)
    // const location= useLocation()
    // useEffect(()=>{
    //     updateNavList(location.pathname)
    // },[location.pathname])
    // //get songs
    const songlist = [];
    playlistData.songIds.forEach((songId) => {
        songlist.push(songs.find((song) => song.uniqueId === songId));
    });
    return (
        
        <UnifiedPageLayout itemData={playlistData}>
            <Playlist songlist={songlist}
                    playlistId={playlistData.uniqueId}/>
        </UnifiedPageLayout>
    );
}

export default PlaylistPage;
