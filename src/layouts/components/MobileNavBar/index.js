import classNames from "classnames/bind";
import styles from './MobileNavBar.module.scss'
import { HomeIcon, HomeIconActive, LibraryIcon, SearchIcon, SearchIconActive } from "../../../components/Icons";
import { Link, NavLink } from "react-router-dom";
import configs from "../../../configs/configs";
const cx=classNames.bind(styles)
function MobileNavBar({path}) {
    return ( 
        <div className={cx("wrapper")}>
            <ul className={cx("nav-pages")}>
                <NavLink to={configs.routes.home}>
                    <li className={cx({ active: path === "/" })}>
                        {path === "/" ? (
                            <HomeIconActive className={cx("icon", "active")} />
                        ) : (
                            <HomeIcon className={cx("icon")} />
                        )}
                        Home
                    </li>
                </NavLink>
                <NavLink to={configs.routes.search}>
                <li className={cx({ active: path === "/search" })}>
                    {path === "/search" ? (
                        <SearchIconActive className={cx("icon", "active")} />
                    ) : (
                        <SearchIcon className={cx("icon")} />
                    )}{" "}
                    Search
                </li>
                </NavLink>
                <NavLink to={configs.routes.library}>
                <li className={cx({ active: path === "/library" })}>
                    {path === "/library" ? (
                        <SearchIconActive className={cx("icon", "active")} />
                    ) : (
                        <LibraryIcon className={cx("icon")} />
                    )}{" "}
                    Your Library
                </li>
                </NavLink>
            </ul>
        </div>
     );
}

export default MobileNavBar;