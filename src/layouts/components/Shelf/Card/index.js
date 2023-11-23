import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { globalPlaylists } from "../../../../assets/data/playlist";
import { Link } from "react-router-dom";
import PlayButton from "../../PlayButton/PlayButton";
import { useContext } from "react";
import { TrackContext } from "../../../../App";
import { XIcon } from "../../../../components/Icons";

const cx = classNames.bind(styles);
function Card({ playlistId,index, removeable, updateCardList}) {
    const playlistData = globalPlaylists.find(
        (item) => playlistId === item.uniqueId
    );
    const { playingItems,isPlaying, playlistPlayPause } = useContext(TrackContext);
    const handlePlayPause = (e, playlistData) => {
        e.stopPropagation();
        e.preventDefault();
        playlistPlayPause(playlistData);
    };
    const handleRemoveCard= (e, index)=>{
        e.stopPropagation();
        e.preventDefault();
        updateCardList(index)
    }
    return (
        <Link to={`/playlist/${playlistData.uniqueId}`}>
            <div className={cx("card")}>
                {removeable?
                    <button className={cx('x-btn')} onClick={(e)=>handleRemoveCard(e,index)}><XIcon className={cx('icon')}/></button>:
                    <></>
                }
                <div className={cx("card-cover")}>
                    <img
                        className={cx("cover-img")}
                        src={playlistData.coverImage}
                        alt=""
                        loading="lazy"
                    />
                    <PlayButton
                        onClick={(e) => handlePlayPause(e, playlistData)}
                        className={cx("play-btn", `${playingItems.playingPlaylist === playlistId && isPlaying? 'playing': 'pause'}`)}
                        medium
                        pause={playingItems.playingPlaylist === playlistId && isPlaying}
                    />
                </div>
                <div className={cx("card-info")}>
                    <p className={cx("title")}>{playlistData.title}</p>
                    <span className={cx("description")}>
                        {playlistData.description}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default Card;
