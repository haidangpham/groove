import classNames from "classnames/bind";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { lyrics } from "../../assets/tracks/lyrics";
import { artists } from "../../assets/data/users";
import songs from "../../assets/tracks";

import styles from './TrackPage.module.scss'
import { NavContext } from "../../App";
import UnifiedPageLayout from "../../layouts/components/UnifiedPageLayout";

const cx= classNames.bind(styles)
function TrackPage() {
    //Save path name in navList
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        updateNavList(location.pathname)
    },[location.pathname])
    //Get track data
    const param = useParams();
    const trackData = songs.find(
        (item) => item.uniqueId === param.songId
    );
    const artistData= artists.find((artist)=> trackData.authorId ===artist.uniqueId)
    const lyricsData= lyrics.find((lyrics)=> lyrics.songId === param.songId)?.lyrics
    //Return home if no lyrics found
    const navigate= useNavigate()
    useEffect(()=>{
        if(!lyricsData){
            navigate('/')
        }
    },[])
    

   
    return ( <div>
        <UnifiedPageLayout itemData={trackData}>
            <div>
                <h2>Lyrics</h2>
                <div className={cx('lyrics')}>
                    {lyricsData?.map((line, index)=>{
                        return(<p className={cx('lyrics-line')} key={index}>{line}</p>)
                    })}
                </div>
                <Link to={`/artist/${artistData.uniqueId}`}>
                    <div className={cx('artist')} >
                        <div className={cx('avatar')}><img alt= "" src={artistData.avatar} /></div>
                        <div>
                            <span>Artist</span>
                            <p>{artistData.name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </UnifiedPageLayout>
    </div> );
}

export default TrackPage;