import { useContext, useState } from "react";
import { TrackContext } from "../../../../App";
import { globalPlaylists } from "../../../../assets/data/playlist";
import styles from './PlaylistItemMobile.module.scss';
import classNames from "classnames/bind";
import { artists } from "../../../../assets/data/users";

const cx= classNames.bind(styles)
function PlaylistItemMobile({ song, playlistId, index }) {
    const [isHovered, setHovered] = useState(false);
    const {
        isPlaying,
        playingItems,
        songPlayPause,
    } = useContext(TrackContext);
    const songIds = globalPlaylists.find(
        (playlist) => playlist.uniqueId === playlistId
    ).songIds;
   
    const isActiveTrack= song.uniqueId === playingItems.playingTrack && playlistId === playingItems.playingPlaylist;
    return (
        <div
        className={cx("song", `${isHovered ? "active" : ""}`)}
        onClick={()=>songPlayPause(song, index, playlistId, songIds)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
    >
        {/* play pause */}
            <img className={cx("song-img")} src={song.coverImage} alt="" />
            <div>
                <span className={cx("song-title", `${isActiveTrack?"active-p": ''}`)}>

                        {song.title}
                </span>
                <p className={cx("song-artist")}>
                        {
                            artists.find(
                                (artist) =>
                                    artist.uniqueId === song.authorId[0]
                            ).name
                        }
                </p>
            </div>
    </div>
    );
}

export default PlaylistItemMobile;