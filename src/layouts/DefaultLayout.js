import classNames from "classnames/bind";

import SideBar from "./components/SideBar";
import styles from "./DefaultLayout.module.scss";
import { currentUser } from "../assets/data/users";
import NowPlayingPanel from "./components/NowPlayingPanel/NowPlayingPanel";
import { BackwardIcon, BellIcon, DownloadIcon, ForwardIcon } from "../components/Icons";

const cx = classNames.bind(styles);
function DefaultLayout({ children, path }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("panel-wrapper")}>
                {/* sidebar */}
                <div className={cx("sidebar")}>
                    <div className={cx("resizeArea")}></div>
                    <SideBar path={path}/>
                </div>
                {/* content */}
                
                <div className={cx('main-view')}>
                    <div className={cx('top-bar')}>
                        <div className={cx('history-nav')}>
                            <button className={cx('backward', 'inactive')}>
                                <BackwardIcon className={cx('icon')}/>
                            </button>
                            <button className={cx('forward')}>
                                <ForwardIcon className={cx('icon')}/>
                            </button>
                        </div>
                        
                        <div className={cx('options')}>
                           
                            <div className={cx('download')}>
                                <DownloadIcon className={cx('icon')}/>
                                <span>Install App</span>
                            </div>
                            <button className={cx('notification')}><BellIcon className={cx('icon', 'bell')}/> </button> 
                            <button className={cx('profile')}>
                                <img src={currentUser.avatar} alt="user's name"/>
                            </button> 
                        </div>
                    </div>
                    <div className={cx('content')}>
                        {children}
                    </div>
                    
                </div>
                
            </div>
            <NowPlayingPanel />
        </div>
    );
}

export default DefaultLayout;
