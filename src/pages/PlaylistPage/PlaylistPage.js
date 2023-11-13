import classNames from "classnames/bind";
import { Link, useLocation, useParams } from "react-router-dom";
import { globalPlaylists } from "../../assets/data/playlist";

import styles from "./PlaylistPage.module.scss";
import { currentUser } from "../../assets/data/users";
import PlayButton from "../../layouts/components/PlayButton/PlayButton";
import { MoreOptionsIcon } from "../../components/Icons";
import songs from "../../assets/tracks";
import Playlist from "../../layouts/components/Playlist";
import { useContext, useEffect } from "react";
import { NavContext, TrackContext } from "../../App";

const cx = classNames.bind(styles);
function PlaylistPage() {
    const { playingItems, isPlaying, playlistPlayPause } =useContext(TrackContext);
    const playlistId = useParams();
    const playlistData = globalPlaylists.find(
        (item) => item.uniqueId === playlistId.playlistId
    );
    //save path name in navList
    const {updateNavList, isBackwarded, updateIsBackwarded}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        if(isBackwarded){
            return
        }
        updateNavList(location.pathname)
        updateIsBackwarded(false)
    },[])
    //get songs
    const songlist = [];
    playlistData.songIds.forEach((songId) => {
        songlist.push(songs.find((song) => song.uniqueId === songId));
    });
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img
                    src={playlistData.coverImage}
                    alt=""
                    className={cx("cover-image")}
                />
                <div className={cx("playlist-infos")}>
                    <span className={cx("type")}>{playlistData.type}</span>
                    <span className={cx("title")}>{playlistData.name}</span>
                    <div className={cx("playlist-details")}>
                        <img
                            className={cx("author-avatar")}
                            src={currentUser.avatar}
                            alt=""
                        />
                        <span className={cx("other-details")}>
                            <Link to={""}>{currentUser.name}</Link> •{" "}
                            {playlistData.songIds.length} songs,
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx("content-wrapper")}>
                <div className={cx("actions")}>
                    {playingItems.playingPlaylist === playlistData.uniqueId &&
                    isPlaying ? (
                        <PlayButton
                            onClick={() => playlistPlayPause(playlistData)}
                            className={cx("play-btn")}
                            large
                            pause
                        />
                    ) : (
                        <PlayButton
                            onClick={() => playlistPlayPause(playlistData)}
                            className={cx("play-btn")}
                            large
                        />
                    )}

                    <MoreOptionsIcon className={cx("more-icon", "icon")} />
                </div>
                <Playlist
                    songlist={songlist}
                    playlistId={playlistData.uniqueId}
                />
            </div>
        </div>
    );
}

export default PlaylistPage;
