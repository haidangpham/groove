import classNames from "classnames/bind";


import styles from './SideBar.module.scss'
import PageNav from "./PageNav";
import Library from "./Library";


const cx= classNames.bind(styles)
function SideBar({path}) {
    
    return (
       <div className={cx('wrapper')}>
            <PageNav path={path} />
            <Library />
       </div> 
    );
}

export default SideBar;