import classNames from "classnames/bind";

import styles from "./PageNav.module.scss";
import {
    HomeIcon,
    HomeIconActive,
    SearchIcon,
    SearchIconActive,
} from "../../../../components/Icons";
import configs from "../../../../configs/configs";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
function PageNav({ path }) {
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
            </ul>
        </div>
    );
}

export default PageNav;
