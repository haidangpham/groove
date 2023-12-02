import classNames from "classnames/bind";
import { useContext, useRef } from "react";
import {useLocation, useNavigate} from 'react-router-dom';

import styles from './TopBar.module.scss';
import mobileStyles from './TopBarMobile.module.scss';
import PlayButton from "../PlayButton/PlayButton";
import { BackwardIcon, BellIcon, DownloadIcon, ForwardIcon, SearchIcon } from "../../../components/Icons";

import { NavContext, TrackContext } from "../../../App";
import { currentUser } from "../../../assets/data/users";
import { globalPlaylists } from "../../../assets/data/playlist";
import albums from "../../../assets/data/albums";
import songs from "../../../assets/tracks";


let cx;
function TopBar({isScrolled, isMobileAgent}) {
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)

    const topBarRef= useRef(null)
    let location= useLocation().pathname.split('/')[1]
    const showPlayBtn = ['playlist', 'album','track'].includes(location);
    //navigation
    const{navList,prevNavList, modifyNavList}= useContext(NavContext)
    const navigate= useNavigate()
    const handleNav= (step)=>{
        modifyNavList(step)
        if (step < 0) {
            navigate(navList[navList.length - 1 + step])
            return  
        }
        navigate(prevNavList[navList.length]) 
    }
    //play btn handle
    const { playingItems, isPlaying, playlistPlayPause, songPlayPause } =useContext(TrackContext);
    const itemId = useLocation().pathname.split('/')[2]
    const dataMap = {
        playlist: globalPlaylists,
        album: albums,
        track: songs,
      };
    const itemData = dataMap[location]?.find((item) => item.uniqueId === itemId);
    const playBtnHandle= (itemData)=>{
        itemData.type ==='Playlist'?playlistPlayPause(itemData):songPlayPause(itemData)
    }
    return ( 
        <div className={cx('top-bar', `${isScrolled || location==='search'? 'bg-change': ''}`)} ref={topBarRef}>
                        <div className={cx('history-nav')}>
                            <button className={cx('backward', 'action',`${navList.length<=1?'inactive':'active'}`)} onClick={()=>handleNav(-1)}>
                                <BackwardIcon className={cx('icon')}/>
                            </button>
                            <button className={cx('forward',`${navList.length>=prevNavList.length?'inactive':'active'}`)} onClick={()=>handleNav(1)}>
                                <ForwardIcon className={cx('icon')}/>
                            </button>
                            {showPlayBtn?<div className={cx('backup-play-btn',`${isScrolled? 'show': ''}`)}>
                                {(playingItems.playingPlaylist === itemData.uniqueId || playingItems.playingTrack === itemData.uniqueId) &&
                                    isPlaying ? (
                                        <PlayButton
                                            onClick={() => playBtnHandle(itemData)}
                                            className={cx("play-btn")}
                                            large
                                            pause
                                        />
                                    ) : (
                                        <PlayButton
                                            onClick={() => playBtnHandle(itemData)}
                                            className={cx("play-btn")}
                                            large
                                        />
                                )}
                                <span className={cx('title')}>{itemData?.title}</span>
                            </div>:<></>}
                            {location==='search'?
                                <div className={cx('search-bar')}>
                                    <div className={cx('icon-ctn')}>
                                        <SearchIcon className={cx('search-i')} />
                                    </div>
                                    <input
                                        className={cx('search-input')}
                                        autoComplete="false"
                                        spellCheck={false}
                                        placeholder="What do you want to listen to?"
                                    >
                                    </input>
                                </div>
                                :<></>
                            }
                        </div>
                        
                        {!isMobileAgent?<div className={cx('options')}>
                           
                            <div className={cx('download')}>
                                <DownloadIcon className={cx('icon')}/>
                                <span>Install App</span>
                            </div>
                            <button className={cx('notification')}><BellIcon className={cx('icon', 'bell')}/> </button> 
                            <button className={cx('profile')}>
                                <img src={currentUser.avatar} alt="user's name"/>
                            </button> 
                        </div>: <></>}
                    </div>
    );
}

export default TopBar;