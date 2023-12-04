import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "./Card.module.scss";
import mobileStyles from "./CardMobile.module.scss";
import { globalPlaylists } from "../../../../assets/data/playlist";
import { MobileContext, TrackContext } from "../../../../App";

import PlayButton from "../../PlayButton/PlayButton";
import { XIcon } from "../../../../components/Icons";

let cx;
function Card({ playlistId,index, removeable, updateCardList}) {
    const {isMobileAgent}= useContext(MobileContext)
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)

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
                    {!isMobileAgent?<PlayButton
                        onClick={(e) => handlePlayPause(e, playlistData)}
                        className={cx("play-btn", `${playingItems.playingPlaylist === playlistId && isPlaying? 'playing': 'pause'}`)}
                        medium
                        pause={playingItems.playingPlaylist === playlistId && isPlaying}
                    />:<></>}
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
