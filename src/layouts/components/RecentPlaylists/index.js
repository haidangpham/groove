import classNames from "classnames/bind";

import styles from "./RecentPlaylist.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TrackContext } from "../../../App";
import { recentPlaylists, userPlaylists } from "../../../assets/data/playlist";
import PlayButton from "../PlayButton/PlayButton";
import { PlayingIcon } from "../../../components/Icons";
const cx = classNames.bind(styles);

function RecentPlaylists({ playingPlaylist }) {
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
                                        {item.name}
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
