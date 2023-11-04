import classNames from "classnames/bind";
import styles from './Playlist.module.scss';
import { ClockIcon } from "../../../components/Icons";
import PlaylistItem from "./PlaylistItem";
import { useRef } from "react";
const cx= classNames.bind(styles)
function Playlist({songlist, playlistId}) {
    const stickyElement= useRef()

    
    return ( 
        <div className={cx('playlist-content')}>
                <div className={cx('playlist-th')} ref={stickyElement} >
                    <span>#</span>
                    <span>Title</span>
                    <span>Album</span>
                    <span>Release Date</span>
                    <span className={cx('duration-th')}><ClockIcon className={cx('icon')}/></span>
                </div>
                {
                    songlist.map((song, index)=> (<PlaylistItem song={song} playlistId={playlistId} index={index} key={index}/>))
                }
                
            </div>
    );
}

export default Playlist;