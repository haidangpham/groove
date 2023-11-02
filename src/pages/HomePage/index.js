import classNames from "classnames/bind";

import styles from './HomePage.module.scss'
import { recentPlaylists, userPlaylists } from "../../assets/data/playlist";
import Shelf from "../../layouts/components/Shelf/Shelf";
import PlayButton from "../../layouts/components/PlayButton/PlayButton";
import { Link } from "react-router-dom";
const cx= classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('greet')}>Good morning</div>
            <div className={cx('recent-playlists')}>
                {recentPlaylists.map((id, index)=>{
                    const item= userPlaylists.find((playlist)=> playlist.id=== id)
                    return(
                        <Link to={`/playlist/${item.uniqueId}`} key={index}>
                            <div className={cx('item')}>
                                <img src={item.coverImage} alt="" className={cx('playlist-cover')}/>
                                <div className={cx('playlist')}>
                                    <span className={cx('playlist-title')}>{item.name}</span>
                                    <span className={cx('play-btn-wrapper')}><PlayButton className={cx('play-btn')} small/></span>
                                </div>
                            
                            </div>
                        </Link>
                    )
                })
                
                }
                    
                
            </div>
            <Shelf />

        </div>
       
    );
}

export default Home;