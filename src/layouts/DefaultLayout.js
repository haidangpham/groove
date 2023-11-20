import classNames from "classnames/bind";
import React, { useContext, useEffect, useRef, useState } from "react";

import { TrackContext } from "../App";
import styles from "./DefaultLayout.module.scss";
import songs from "../assets/tracks";

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import NowPlayingPanel from "./components/NowPlayingPanel/NowPlayingPanel";
import { useLocation } from "react-router-dom";
import { globalPlaylists } from "../assets/data/playlist";

const cx = classNames.bind(styles);
function DefaultLayout({ children, path }) {
    const mainViewRef= useRef(null)
   
    const [isScrolled, setIsScrolled]= useState(false)
    const scrollFunction = (e) => {
        
    if (e.target.scrollTop > 300) {
        setIsScrolled(true)
    } else {
        setIsScrolled(false)
    }
    };
    //Now Playing
    const{playingItems}= useContext(TrackContext)
    const track= songs.find((song)=> song.uniqueId ===playingItems.playingTrack)
    
    //Background color
    const wrapperRef= useRef()
    const location= useLocation()
    const type= location.pathname.split('/')[1]
    const backgroundId= location.pathname.split('/')[2]
    let backgroundColor
    if(type ==='playlist'){
        backgroundColor= globalPlaylists.find((playlist)=>playlist.uniqueId === backgroundId).backgroundColor
    }else if(type==='song'){
        // backgroundColor= songs.find((song)=>song.uniqueId === backgroundId).backgroundColor
    }else{
        //default color
        backgroundColor= 'rgb(40, 173, 135)'
    }

    useEffect(() => {
        setTimeout(() => {
          wrapperRef.current.style.setProperty('--background-color', backgroundColor);
        }, 1000); // Change after 1 second (adjust as needed)
      }, [location]);
    return (
        <div className={cx("wrapper")} ref={wrapperRef}>
            <div className={cx("panel-wrapper")}>
                {/* sidebar */}
                <div className={cx("sidebar")}>
                    <div className={cx("resizeArea")}></div>
                    <SideBar path={path}/>
                </div>
                {/* content */}
                
                <div className={cx('main-view')} ref={mainViewRef} onScroll={scrollFunction}>
                    <TopBar isScrolled={isScrolled}/>
                    <div className={cx('content')}>
                        {children}
                    </div>
                    
                </div>
                
            </div>
            <NowPlayingPanel track={track} />
        </div>
    );
}

export default DefaultLayout;
