import classNames from "classnames/bind";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./DefaultLayout.module.scss";
import mobileStyles from './DefaultLayoutMobile.module.scss';
import MobileNavBar from "./components/MobileNavBar";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import NowPlayingPanel from "./components/NowPlayingPanel/NowPlayingPanel";

import songs from "../assets/tracks";
import { MobileContext, TrackContext } from "../App";
import { globalPlaylists } from "../assets/data/playlist";



let cx;
function DefaultLayout({ children, path }) {
  //Handle Agent
  const {isMobileAgent}= useContext(MobileContext)
  isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)

    const mainViewRef= useRef(null)
    const [isScrolled, setIsScrolled]= useState(false)
    const handleScroll = (e) => {   
      if (e.target.scrollTop > 300 || window.scrollY > 300) {
        console.log('scrolled!');
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
    //Handle background color
    let backgroundColor
    switch (type) {
        case 'playlist':
          backgroundColor = globalPlaylists.find((playlist) => playlist.uniqueId === backgroundId)?.themeColor;
          break;
        case 'track':
          backgroundColor = songs.find((song) => song.uniqueId === backgroundId)?.themeColor;
          break;
        case 'search':
          backgroundColor = '#121212';
          break;
        default:
          //Default color
          backgroundColor = 'rgb(40, 173, 135)';
          break;
    }
    if(backgroundColor=== undefined){
      backgroundColor = 'rgb(40, 173, 135)';
    }
    useEffect(() => {
        setTimeout(() => {
          wrapperRef.current.style.setProperty('--background-color', backgroundColor);
        }, 1); // Change after 1 second (adjust as needed)
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
                <div className={cx('main-view')} ref={mainViewRef} onScroll={handleScroll}>
                    <TopBar isScrolled={isScrolled}/>
                    <div className={cx('content')}>
                        {children}
                    </div>
                </div>  
            </div>
            <NowPlayingPanel track={track} />
            {isMobileAgent?
              <MobileNavBar path={path}/>
              :<></>}
        </div>
    );
}

export default DefaultLayout;
