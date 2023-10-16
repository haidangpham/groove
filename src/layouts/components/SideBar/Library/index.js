import classNames from "classnames/bind";

import styles from "./Library.module.scss";
import {
    LibraryIcon,
    ActiveLibraryIcon,
    ArrowToRightIcon,
    PlusIcon,
    SearchIcon,
    MenuIcon,
} from "../../../../components/Icons";

const cx = classNames.bind(styles);
function Library() {
    return (
        <div className={cx("wrapper")}>
            <div>
                <div className={cx("library-header")}>
                    <div className={cx("toggle-div")}>
                        <ActiveLibraryIcon className={cx("icon", "library-icon")} />
                        <span>Your Library</span>
                    </div>
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
                    <SearchIcon className={cx("search-i", "icon")} />
                    <button>
                        <span>Recents</span>
                        <MenuIcon className={cx("icon")} />
                    </button>
                    <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>scroll</div>
                        <div>SCROLL</div>
                </div>
            </div>
        </div>
    );
}

export default Library;
