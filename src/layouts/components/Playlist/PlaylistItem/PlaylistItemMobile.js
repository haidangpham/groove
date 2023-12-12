import { useContext, useState } from "react";
import { TrackContext } from "../../../../App";
import { globalPlaylists } from "../../../../assets/data/playlist";
import styles from './PlaylistItemMobile.module.scss';
import classNames from "classnames/bind";
import { artists } from "../../../../assets/data/users";
import { MoreOptionsIcon } from "../../../../components/Icons";

const cx= classNames.bind(styles)
function PlaylistItemMobile({ trackData, playlistId= null, trackIds, index }) {
    const [isHovered, setHovered] = useState(false);
    const {
        playingItems,
        songPlayPause,
    } = useContext(TrackContext);
   
    const isActiveTrack= trackData.uniqueId === playingItems.playingTrack && playlistId === playingItems.playingPlaylist;
    return (
        <div
        className={cx("song", `${isHovered ? "active" : ""}`)}
        onClick={()=>songPlayPause(trackData, index, playlistId, trackIds, true)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
    >
        {/* play pause */}
        <div className={cx('song-details')}>
        
            <img className={cx("song-img")} src={trackData.coverImage} alt="" />
            <div>
                <span className={cx("song-title", `${isActiveTrack?"active-p": ''}`)}>
                    {trackData.title}
                </span>
                <p className={cx("song-artist")}>
                        {
                            artists.find(
                                (artist) =>
                                    artist.uniqueId === trackData.authorId[0]
                            ).name
                        }
                </p>
            </div>
            </div>
            <button><MoreOptionsIcon className={cx('icon')} /></button>
    </div>
    );
}

export default PlaylistItemMobile;