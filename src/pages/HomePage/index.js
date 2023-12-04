import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import styles from "./HomePage.module.scss";
import mobileStyles from "./HomePageMobile.module.scss";
import RecentPlaylists from "../../layouts/components/RecentPlaylists";
import { MobileContext, NavContext, TrackContext } from "../../App";

import Shelf from "../../layouts/components/Shelf/Shelf";
let cx;
function Home() {
    const {isMobileAgent}= useContext(MobileContext)
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)
    const { playingItems } = useContext(TrackContext);
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    
    useEffect(()=>{
        updateNavList(location.pathname)
    }, [location.pathname])
    //Handle Greeting
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting
    if( 5 <= currentHour && currentHour < 12){
        greeting= 'Good morning'
    }else if(12 <= currentHour && currentHour < 18){
        greeting= 'Good afternoon'
    }else if(18 <= currentHour && currentHour < 22){
        greeting= 'Good evening'
    }else{
        greeting= 'Good night'
    }
    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("greet")}>{greeting}</h3>
            <RecentPlaylists  playingPlaylist={playingItems.playingPlaylist} />
            <Shelf title='hits'  cardList={['7435bcd8', '8227f292', 'd839b189', '960fdcff', '458fa796']}/>
            <Shelf title='hits'  cardList={['7435bcd8', '8227f292', 'd839b189', '960fdcff', '458fa796']}/>
            <Shelf title='hits'  cardList={['7435bcd8', '8227f292', 'd839b189', '960fdcff', '458fa796']}/>
        </div>
    );
}

export default Home;
