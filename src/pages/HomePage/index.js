import classNames from "classnames/bind";

import styles from './HomePage.module.scss'
import { recentPlaylists, userPlaylists } from "../../assets/data/playlist";
import Shelf from "../../layouts/components/Shelf/Shelf";
const cx= classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('greet')}>Good morning</div>
            <div className={cx('recent-playlists')}>
                {recentPlaylists.map((id, index)=>{
                    const item= userPlaylists.find((playlist)=> playlist.id=== id)
                    return(
                    <div className={cx('item')}>
                        <img src={item.coverImage} alt="" className={cx('playlist-cover')}/>
                    </div>)
                })
                
                }
                    
                
            </div>
            <Shelf />

        </div>
       
    );
}

export default Home;