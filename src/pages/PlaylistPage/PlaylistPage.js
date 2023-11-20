import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import songs from "../../assets/tracks";
import { globalPlaylists } from "../../assets/data/playlist";

import styles from "./PlaylistPage.module.scss";

import Playlist from "../../layouts/components/Playlist";
import UnifiedPageLayout from "../../layouts/components/UnifiedPageLayout";

const cx = classNames.bind(styles);
function PlaylistPage() {
    const playlistId = useParams();
    const playlistData = globalPlaylists.find(
        (item) => item.uniqueId === playlistId.playlistId
    );
    
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
