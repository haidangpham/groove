import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import { artists, currentUser } from "../../../assets/data/users";

import styles from "./UnifiedPageLayout.module.scss";
import { NavContext, TrackContext } from "../../../App";
import PlayButton from "../PlayButton/PlayButton";
import { HeartIcon, MoreOptionsIcon } from "../../../components/Icons";
import albums from "../../../assets/data/albums";


const cx = classNames.bind(styles);
function UnifiedPageLayout({children, itemData}) {
    const { playingItems, isPlaying, playlistPlayPause, songPlayPause } =useContext(TrackContext);
    
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        updateNavList(location.pathname)
    },[location.pathname])

    const playBtnHandle= (itemData)=>{
        if(itemData.type ==='Playlist'){
            playlistPlayPause(itemData)
            
        }else{   
            songPlayPause(itemData)
        }
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img
                    src={itemData.coverImage}
                    alt=""
                    className={cx("cover-image")}
                />
                <div className={cx("playlist-infos")}>
                    <span className={cx("type")}>{itemData.type}</span>
                    <span className={cx('title')}>{itemData.title}</span>
                    <div className={cx("playlist-details")}>
                        <img
                            className={cx("author-avatar")}
                            src={artists.find((artist)=> artist.uniqueId === itemData.authorId[0]).avatar}
                            alt=""
                        />
                        <span className={cx("other-details")}>
                            <Link className={cx('author-name')} to={`/artist/${itemData.authorId[0]}`}>
                                {artists.find((artist)=> artist.uniqueId === itemData.authorId[0]).name}
                            </Link>
                            {
                                itemData.type==='Song'?
                                <> •<Link to={`/album/${itemData.albumId}`} className={cx('album-title')}> {albums.find((album)=> album.uniqueId ===itemData.albumId).title}</Link> •
                                <span> {itemData.releaseDate} • {itemData.duration} • {itemData.playCount}</span></>
                                :
                                <div></div>
                            }
                            
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx("content-wrapper")}>
                <div className={cx("actions")}>
                    {(playingItems.playingPlaylist === itemData.uniqueId || playingItems.playingTrack === itemData.uniqueId) &&
                    isPlaying ? (
                        <PlayButton
                            onClick={()=>playBtnHandle(itemData)}
                            className={cx("play-btn")}
                            large
                            pause
                        />
                    ) : (
                        <PlayButton
                            onClick={()=>playBtnHandle(itemData)}
                            className={cx("play-btn")}
                            large
                        />
                    )}
                    {itemData.authorId !== currentUser.uniqueId? <HeartIcon className={cx('icon', 'heart-icon')}/>: <></>}
                    <MoreOptionsIcon className={cx("more-icon", "icon")} />
                </div>
                {children}
            </div>
        </div>
    );
}

export default UnifiedPageLayout;
