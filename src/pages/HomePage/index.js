import classNames from "classnames/bind";

import styles from "./HomePage.module.scss";
import Shelf from "../../layouts/components/Shelf/Shelf";

import RecentPlaylists from "../../layouts/components/RecentPlaylists";
import { useContext } from "react";
import { TrackContext } from "../../App";
const cx = classNames.bind(styles);
function Home() {
    const { playingItems } = useContext(TrackContext);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("greet")}>Good morning</div>
                <RecentPlaylists  playingPlaylist={playingItems.playingPlaylist} />
            <Shelf />
        </div>
    );
}

export default Home;
