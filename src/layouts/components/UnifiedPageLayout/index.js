import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import styles from "./UnifiedPageLayout.module.scss";
import mobileStyles from "./UnifiedPageLayoutMobile.module.scss"
import { MobileContext, NavContext, TrackContext } from "../../../App";
import { artists, currentUser } from "../../../assets/data/users";
import albums from "../../../assets/data/albums";

import PlayButton from "../PlayButton/PlayButton";
import { HeartIcon, MoreOptionsIcon, ShuffleIcon } from "../../../components/Icons";


let cx;
function UnifiedPageLayout({children, itemData}) {
    const {isMobileAgent}= useContext(MobileContext)
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)

    const { playingItems, isPlaying, isShuffled, playlistPlayPause, songPlayPause, toggleIsShuffled } =useContext(TrackContext);
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
                    {!isMobileAgent?
                        <div>
                            <span className={cx("type")}>{itemData.type}</span>

                        </div>
                        :<></>}
                    <span className={cx('title')}>{itemData.title}</span>
                    <div className={cx("playlist-details")}>
                        <span className={cx('descript')}>{itemData.description}</span>
                        <span className={cx("other-details")}>
                        <img
                            className={cx("author-avatar")}
                            src={artists.find((artist)=> artist.uniqueId === itemData.authorId[0]).avatar}
                            alt=""
                        />
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
                    {itemData.authorId !== currentUser.uniqueId && !isMobileAgent? <HeartIcon className={cx('icon')}/>: <button onClick={toggleIsShuffled}><ShuffleIcon className={cx('icon',`${isShuffled?'active':''}`)}/></button>}
                    <MoreOptionsIcon className={cx("icon")} />
                </div>
                {children}
            </div>
        </div>
    );
}

export default UnifiedPageLayout;
