
import { useParams } from "react-router-dom";

import songs from "../../assets/tracks";
import { globalPlaylists } from "../../assets/data/playlist";



import Playlist from "../../layouts/components/Playlist";
import UnifiedPageLayout from "../../layouts/components/UnifiedPageLayout";

function PlaylistPage() {
    const {playlistId} = useParams();
    const playlistData = globalPlaylists.find(
        (item) => item.uniqueId === playlistId
    );
    
    //get songs
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
