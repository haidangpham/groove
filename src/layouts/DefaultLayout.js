import classNames from "classnames/bind";
import React, { useContext, useRef, useState } from "react";

import { TrackContext } from "../App";
import styles from "./DefaultLayout.module.scss";
import songs from "../assets/tracks";

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import NowPlayingPanel from "./components/NowPlayingPanel/NowPlayingPanel";

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

    return (
        <div className={cx("wrapper")}>
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
