import classNames from "classnames/bind";

import SideBar from "./components/SideBar";
import styles from "./DefaultLayout.module.scss";
import NowPlayingPanel from "./components/NowPlayingPanel/NowPlayingPanel";

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
                {children}
            </div>
            <NowPlayingPanel />
        </div>
    );
}

export default DefaultLayout;
