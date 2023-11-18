import classNames from "classnames/bind";

import styles from "./HomePage.module.scss";
import Shelf from "../../layouts/components/Shelf/Shelf";

import RecentPlaylists from "../../layouts/components/RecentPlaylists";
import { useContext, useEffect, useRef } from "react";
import { NavContext, TrackContext } from "../../App";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(styles);
function Home() {
    const { playingItems } = useContext(TrackContext);
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    
    useEffect(()=>{
        updateNavList(location.pathname)
    }, [location.pathname])

    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("greet")}>Good morning</h3>
                <RecentPlaylists  playingPlaylist={playingItems.playingPlaylist} />
                <Shelf title='hits'  cardList={['7435bcd8', '8227f292', 'd839b189', '960fdcff', '458fa796']}/>
                <Shelf title='hits'  cardList={['7435bcd8', '8227f292', 'd839b189', '960fdcff', '458fa796']}/>
                <Shelf title='hits'  cardList={['7435bcd8', '8227f292', 'd839b189', '960fdcff', '458fa796']}/>
        </div>
    );
}

export default Home;
