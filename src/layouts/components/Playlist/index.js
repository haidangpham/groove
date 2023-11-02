import classNames from "classnames/bind";
import styles from './Playlist.module.scss';
import { ClockIcon, HeartIcon, MoreOptionsIcon, PlayIcon } from "../../../components/Icons";
import { Link } from "react-router-dom";
import { artists } from "../../../assets/data/users";
import albums from "../../../assets/data/albums";
const cx= classNames.bind(styles)
function Playlist({songlist}) {
    return ( 
        <div className={cx('playlist-content')}>
                <div className={cx('playlist-th')}>
                    <span>#</span>
                    <span>Title</span>
                    <span>Album</span>
                    <span>Release Date</span>
                    <span className={cx('duration-th')}><ClockIcon className={cx('icon')}/></span>
                </div>
                
                {
                    songlist.map((song, index)=>{
                        let isHovered= false;
                        return(
                        <div className={cx('song')} onMouseEnter={()=> isHovered = true} onMouseLeave={()=> isHovered= false} key={index}>
                            <span className={cx('')}>{isHovered? <PlayIcon />: index}</span>
                            <div className={cx('song-title-ctn')}>
                                <img className={cx('song-img')} src={song.coverImage} alt=""/>
                                <div>
                                    <span className={cx('song-title')}><Link to={`/track/${song.uniqueId}`}>{song.title}</Link></span>
                                    <p className={cx('song-artist')}><Link to={`/artist/${song.artistId}`}>{artists.find((artist)=> artist.uniqueId === song.artistId).name}</Link></p>
                                </div>
                                
                            </div>
                            <span className={cx('song-album')}><Link to={`/album/${song.uniqueId}`}>{albums.find((album)=> album.id === song.albumId).title}</Link></span>
                            <span>{song.releaseDate}</span>
                            <div className={cx('duration')}>
                                <HeartIcon className={cx('icon')}/>
                                <span>{song.duration}</span>
                                <MoreOptionsIcon className={cx('icon')}/>
                            </div>
                        </div>
                    )})
                }
                
            </div>
    );
}

export default Playlist;