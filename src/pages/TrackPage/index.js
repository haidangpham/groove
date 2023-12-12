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
    const artistData= trackData.authorId.map((id)=> artists.find((artist)=> artist.uniqueId=== id))
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
                    {lyricsData?.map((lyric, index)=>{
                        return(<p className={cx('lyrics-line')} key={index}>{lyric.line}</p>)
                    })}
                </div>
                    {
                        artistData.map((artist, index)=>(
                            <Link to={`/artist/${artist.uniqueId}`} key={index}>
                                <div className={cx('artist')} >
                                <div className={cx('avatar')}><img alt= "" src={artist.avatar} /></div>
                                <div>
                                    <span>Artist</span>
                                    <p>{artist.name}</p>
                                </div>
                                </div> 
                            </Link>
                        ))
                    }
                    
                
            </div>
        </UnifiedPageLayout>
    </div> );
}

export default TrackPage;