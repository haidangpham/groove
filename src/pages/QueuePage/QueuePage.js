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
    const {queuedTracks, playingItems, playingTrackIndex}= useContext(TrackContext)
    const trackDatas= queuedTracks.map((trackId, index)=>{
        return songs.find((song)=> song.uniqueId === trackId)
    })

    const next= trackDatas.slice(playingTrackIndex+1)
    return (
        <div className={cx('wrapper')}>
            <h2>Queue</h2>
            <div className={cx('content')}>
                <div className={cx('playing-track')}>
                    <span>Now Playing</span>
                    <PlaylistItem trackData={trackDatas[playingTrackIndex]} songIds={queuedTracks} index={0} showDate= {false} active/>
                </div>
               {playingItems.playingPlaylist? <div className={cx('q-track')}>
                    <span>Next from: {globalPlaylists.find((p)=> p.uniqueId === playingItems.playingPlaylist)?.title}</span>
                    {
                        next.map((track, index)=>(
                            <PlaylistItem trackData={track} songIds= {queuedTracks} index={index + 1} showDate={false} key={index}/>
                        ))
                    }
                </div>:<></>}
            </div>
        </div>
    );
}

export default QueuePage;