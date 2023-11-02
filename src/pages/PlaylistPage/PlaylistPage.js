import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { globalPlaylists } from "../../assets/data/playlist";

import styles from './PlaylistPage.module.scss';
import {  currentUser } from "../../assets/data/users";
import PlayButton from "../../layouts/components/PlayButton/PlayButton";
import { MoreOptionsIcon } from "../../components/Icons";
import songs from "../../assets/tracks";
import Playlist from "../../layouts/components/Playlist";

const cx= classNames.bind(styles)
function PlaylistPage() {
    const playlistId= useParams()
    const playlistData= globalPlaylists.find((item)=> item.uniqueId === playlistId.playlistId)
    const songlist= []
    playlistData.songIds.forEach(songId => {
        songlist.push(songs.find((song)=> song.id ===songId))
    })


    return (
    <div className={cx('wrapper')}>
        <div className={cx('header')}>
            <img src={playlistData.coverImage} alt="" className={cx('cover-image')}/>
            <div className={cx('playlist-infos')}>
                <span className={cx('type')}>{playlistData.type}</span>
                <span className={cx('title')}>{playlistData.name}</span>
                <div className={cx('playlist-details')}>
                    <img className={cx('author-avatar')} src={currentUser.avatar} alt="" />
                    <span className={cx('other-details')}><a>{currentUser.name}</a> • {playlistData.songIds.length} songs,</span>
                
                </div>
            </div>
            
        </div>
        <div className={cx('content-wrapper')}>
            <div className={cx('actions')}>
                <PlayButton className={cx('play-btn')} large/>
                <MoreOptionsIcon className={cx('more-icon', 'icon')}/>
            </div>
            <Playlist songlist={songlist}/>
        </div>
    </div>
    );
}

export default PlaylistPage;