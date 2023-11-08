import classNames from "classnames/bind";
import styles from './PlaylistItem.module.scss';

import { useContext, useEffect, useState } from "react";
import { TrackContext } from "../../../../App";

import { HeartIcon, MoreOptionsIcon, PauseIcon, PlayIcon } from "../../../../components/Icons";
import { Link } from "react-router-dom";
import { artists } from "../../../../assets/data/users";
import albums from "../../../../assets/data/albums";
const cx= classNames.bind(styles)
function PlaylistItem({song, playlistId, index}) {
    const [isHovered, setHovered]= useState(false)
    const { globalAudioRef, isPlaying, setIsPlaying,playingItems, updatePlayingTrack, updatePlayingPlaylist}= useContext(TrackContext)

    const handlePlayBtn = () => {
        const isSamePlaylist = playlistId === playingItems.playingPlaylist;
        const isSameTrack = song.uniqueId === playingItems.playingTrack;
      
        if (isSamePlaylist) {
          if (isSameTrack) {
            globalAudioRef.current[isPlaying ? 'pause' : 'play']();
            setIsPlaying((prevIsPlaying) => !prevIsPlaying);
          } else {
            updatePlayingTrack(song.uniqueId);
          }
        } else {
          globalAudioRef.current.currentTime = 0;
          updatePlayingTrack(song.uniqueId);
          updatePlayingPlaylist(playlistId);
          setIsPlaying(true);
        }
      };
    return (
    <div
        className={cx('song',`${isHovered? 'active': ''}`)}
        onMouseOver={()=> setHovered(true)} 
        onMouseOut={() => setHovered(false)}
    >
        <span onClick={handlePlayBtn}>
            {isHovered?
                (isPlaying && playingItems.playingTrack=== song.uniqueId && playingItems.playingPlaylist=== playlistId?
                <PauseIcon className={cx('icon', 'play-btn')}/>:
                <PlayIcon className={cx('icon', 'play-btn')} />
                ): index}
        </span>
        <div className={cx('song-title-ctn')}>
            <img className={cx('song-img')} src={song.coverImage} alt=""/>
            <div>
                <span className={cx('song-title')}><Link to={`/track/${song.uniqueId}`}>{song.title}</Link></span>
                <p className={cx('song-artist')}><Link to={`/artist/${song.artistId}`}>{artists.find((artist)=> artist.uniqueId === song.artistId).name}</Link></p>
            </div>
            
        </div>
        <span className={cx('song-album')}><Link to={`/album/${song.uniqueId}`}>{albums.find((album)=> album.id === song.albumId).title}</Link></span>
        <span className={cx('release-date')}>{song.releaseDate}</span>
        <div className={cx('duration')}>
            <HeartIcon className={cx('icon')}/>
            <span>{song.duration}</span>
            <MoreOptionsIcon className={cx('icon')}/>
        </div>
    </div>
    );
}

export default PlaylistItem;