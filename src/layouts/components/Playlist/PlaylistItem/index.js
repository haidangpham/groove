import classNames from "classnames/bind";
import styles from "./PlaylistItem.module.scss";

import { useContext, useState } from "react";
import { TrackContext } from "../../../../App";
import { Link } from "react-router-dom";

import {
    HeartIcon,
    MoreOptionsIcon,
    PauseIcon,
    PlayIcon,
} from "../../../../components/Icons";
import { artists } from "../../../../assets/data/users";
import albums from "../../../../assets/data/albums";
const cx = classNames.bind(styles);
function PlaylistItem({ trackData, playlistId= null, trackIds, index, showDate= true }) {
    const [isHovered, setHovered] = useState(false);
    const {
        isPlaying,
        playingItems,
        songPlayPause,
    } = useContext(TrackContext);
   
    const isActiveTrack= trackData.uniqueId === playingItems.playingTrack && playlistId === playingItems.playingPlaylist;
    return (
        <div
            className={cx("song",`${!showDate?"date-disabled":""}` ,`${isHovered ? "active" : ""}`)}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <span onClick={()=>songPlayPause(trackData, index, playlistId, trackIds)}>
                    {isHovered ? (
                        isPlaying &&
                        playingItems.playingTrack === trackData.uniqueId &&
                        playingItems.playingPlaylist === playlistId ? (
                            <PauseIcon className={cx("icon", "play-btn")} />
                        ) : (
                            <PlayIcon className={cx("icon", "play-btn")} />
                        )
                    ) : (
                        <span className={isActiveTrack?cx("active-p"): cx('')}>{index + 1}</span>
                    )}
                </span>
            
            <div className={cx("song-header-ctn")}>
                
                <div className={cx('title-ctn')}>
                    <img className={cx("song-img")} src={trackData.coverImage} alt="" />
                    <div>
                        <span className={cx("song-title", `${isActiveTrack?"active-p": ''}`)}>
                            <Link
                                to={`/track/${trackData.uniqueId}`}
                                className={isActiveTrack?cx("active-p"): cx('')}
                            >
                                {trackData.title}
                            </Link>
                        </span>
                        <p className={cx("song-artist")}>
                            <Link to={`/artist/${trackData.authorId}`}>
                                {
                                    artists.find(
                                        (artist) =>
                                            artist.uniqueId === trackData.authorId[0]
                                    ).name
                                }
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <span className={cx("song-album")}>
                <Link to={`/album/${trackData.albumId}`}>
                    {albums.find((album) => album.uniqueId === trackData.albumId).title}
                </Link>
            </span>
            {showDate?<span className={cx("release-date")}>{trackData.releaseDate}</span>: <></>}
            <div className={cx("duration")}>
                <HeartIcon className={cx("icon")} />
                <span>{trackData.duration}</span>
                <MoreOptionsIcon className={cx("icon")} />
            </div>
        </div>
    );
}

export default PlaylistItem;
