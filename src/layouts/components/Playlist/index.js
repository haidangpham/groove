import classNames from "classnames/bind";
import styles from './Playlist.module.scss';
import { ClockIcon } from "../../../components/Icons";
import PlaylistItem from "./PlaylistItem";
import { useContext } from "react";
import { MobileContext } from "../../../App";
import PlaylistItemMobile from "./PlaylistItem/PlaylistItemMobile";
import { globalPlaylists } from "../../../assets/data/playlist";
const cx= classNames.bind(styles)
function Playlist({songlist, playlistId}) {
    const {isMobileAgent}= useContext(MobileContext)
    const trackIds = globalPlaylists.find(
        (playlist) => playlist.uniqueId === playlistId
    ).songIds;
    return ( 
        <div className={cx('playlist-content')}>
                {!isMobileAgent?<div className={cx('playlist-th')} >
                    <span>#</span>
                    <span>Title</span>
                    <span>Album</span>
                    <span>Release Date</span>
                    <span className={cx('duration-th')}><ClockIcon className={cx('icon')}/></span>
                </div>:<></>}
                {
                    songlist.map((song, index)=> (!isMobileAgent?<PlaylistItem trackData={song} playlistId={playlistId} songIds={trackIds} index={index} key={index}/>:<PlaylistItemMobile trackData={song} playlistId={playlistId} index={index} key={index}/>))
                }
                
            </div>
    );
}

export default Playlist;