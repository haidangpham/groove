import classNames from "classnames/bind";
import React, { useContext, useRef } from "react";

import { TrackContext } from "../App";
import styles from "./DefaultLayout.module.scss";
import songs from "../assets/tracks";

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import NowPlayingPanel from "./components/NowPlayingPanel/NowPlayingPanel";

const cx = classNames.bind(styles);
function DefaultLayout({ children, path }) {
    const mainViewRef= useRef(null)
    const topBarRef= useRef(null)
    const scrollFunction = (e) => {
        if (e.target.scrollTop > 200) {
            topBarRef.current.classList.add(cx('bg-change'))
        } else {
            topBarRef.current.classList.remove(cx('bg-change'))
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
                    <TopBar forwardedRef={topBarRef}/>
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
