import classNames from "classnames/bind";

import styles from "./Library.module.scss";
import {
    ActiveLibraryIcon,
    ArrowToRightIcon,
    PlusIcon,
    SearchIcon,
    MenuIcon,
    SpeakerIcon,
} from "../../../../components/Icons";
import { userPlaylists } from "../../../../assets/data/playlist";
import TipBox from "../../TippyBox";
import { Link } from "react-router-dom";
import { artists } from "../../../../assets/data/users";
import { useContext } from "react";
import { TrackContext } from "../../../../App";

const cx = classNames.bind(styles);
function Library() {
    const {playingItems, isPlaying}= useContext(TrackContext)
    return (
        <div className={cx("wrapper")}>
            <div className={cx('fixed-wrapper')}>
                <div className={cx("library-header")}>
                        <TipBox content="Collapse Your Library">
                            <div className={cx("toggle-div")}>
                                <ActiveLibraryIcon className={cx("icon", "library-icon")} />
                                <span>Your Library</span>
                            </div>
                        </TipBox>
                    
                    <div className={cx("options-div")}>
                        <span>
                            <PlusIcon className={cx("icon")} />
                        </span>
                        <span>
                            <ArrowToRightIcon className={cx("icon")} />
                        </span>
                    </div>
                </div>
                <div className={cx("category")}>
                    <span
                        aria-checked="false"
                        role="checkbox"
                        className={cx("c-playlists")}
                    >
                        Playlist
                    </span>
                    <span className={cx("c-artists")}>Artists</span>
                    <span className={cx("c-podcasts-&-show")}>
                        Podcasts & Shows
                    </span>
                </div>
            </div>

            <div className={cx("library-content", "scrollableDiv")}>
                <div className={cx("actions")}>
                    <span><SearchIcon className={cx("search-i", "icon")} /></span>
                    <button>
                        <span>Recents</span>
                        <MenuIcon className={cx("icon")} />
                    </button>
                </div>
                {
                    userPlaylists.map((item, index)=>{
                        return(
                            <Link to={`/playlist/${item.uniqueId}`} key={index}>
                            <div className={cx('item-box')}>
                                <div className={cx('row-item')}>
                                    <div className={cx('cover-img')}><img src={item.coverImage} alt=""/></div>
                                    <div className={cx('item')}>
                                        <div>
                                            <p className={cx('item-title',`${playingItems.playingPlaylist===item.uniqueId?'active-title':''}`)}>{item.title}</p>
                                            <span className={cx('item-subtitle')}>{item.type} • {artists.find((author)=> author.uniqueId === item.authorId[0]).name}</span>
                                        </div>
                                        {playingItems.playingPlaylist===item.uniqueId && isPlaying?<SpeakerIcon  className={cx('playing-icon', 'icon')}/>: <></>}
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }  
                
            </div>
        </div>
    );
}

export default Library;
