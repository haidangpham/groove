import classNames from "classnames/bind";

import styles from "./RecentPlaylist.module.scss";
import mobileStyles from "./ReccentPlaylistsMobile.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MobileContext, TrackContext } from "../../../App";
import { recentPlaylists, userPlaylists } from "../../../assets/data/playlist";
import PlayButton from "../PlayButton/PlayButton";
import { PlayingIcon } from "../../../components/Icons";

let cx;

function RecentPlaylists({ playingPlaylist }) {
    const {isMobileAgent}= useContext(MobileContext)
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)
    const { isPlaying, playlistPlayPause } = useContext(TrackContext);
    return (
        <div className={cx("recent-playlists")}>
            {recentPlaylists.map((id, index) => {
                const item = userPlaylists.find(
                    (playlist) => playlist.id === id
                );
                return (
                    <div className={cx("link-wrapper")} key={index}>
                        <Link to={`/playlist/${item.uniqueId}`}>
                            <div className={cx("item")}>
                                <img
                                    src={item.coverImage}
                                    alt=""
                                    className={cx("playlist-cover")}
                                />
                                <div className={cx("playlist")}>
                                    <span className={cx("playlist-title")}>
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <div className={cx("play-btn-wrapper")}>
                            {playingPlaylist === item.uniqueId && isPlaying ? (
                                <PlayButton
                                    className={cx("play-btn")}
                                    small
                                    pause
                                    onClick={() => playlistPlayPause(item)}
                                />
                                
                            ) : (
                                <PlayButton
                                    className={cx("play-btn")}
                                    small
                                    onClick={() => playlistPlayPause(item)}
                                />
                            )}
                            {playingPlaylist === item.uniqueId && isPlaying?<PlayingIcon  className={cx('playing-icon')}/>: null}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RecentPlaylists;
