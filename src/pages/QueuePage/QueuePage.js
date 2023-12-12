import classNames from "classnames/bind";

import styles from './QueuePage.module.scss';
import mobileStyles from './QueuePageMobile.module.scss';
import { useContext } from "react";
import { MobileContext, TrackContext } from "../../App";
import PlaylistItem from "../../layouts/components/Playlist/PlaylistItem";
import songs from "../../assets/tracks";
import { globalPlaylists } from "../../assets/data/playlist";


let cx
function QueuePage() {
    const{isMobileAgent}= useContext(MobileContext)
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)
    const {queuedTracks, playingItems}= useContext(TrackContext)
    const trackDatas= queuedTracks.map((trackId, index)=>{
        return songs.find((song)=> song.uniqueId === trackId)
    })
     
    return (
        <div className={cx('wrapper')}>
            <h2>Queue</h2>
            <div className={cx('content')}>
                <div className={cx('playing-track')}>
                    <span>Now Playing</span>
                    <PlaylistItem trackData={trackDatas[0]} songIds={queuedTracks} index={0} showDate= {false}/>
                </div>
                <div className={cx('q-track')}>
                    <span>Next from: {globalPlaylists.find((p)=> p.uniqueId === playingItems.playingPlaylist)?.title}</span>
                    {
                        trackDatas.map((trackData, index)=>(
                        index!==0?<PlaylistItem trackData={trackData} songIds={queuedTracks} index={index} showDate= {false}/>:<></>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default QueuePage;