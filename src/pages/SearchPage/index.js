import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { useContext, useEffect } from "react";
import { NavContext } from "../../App";
import { useLocation } from "react-router-dom";

const cx= classNames.bind(styles)
function Search() {
    //save path name in navList
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        updateNavList(location.pathname)
    },[location.pathname])
 
    return ( <div>
        <div className={cx('wrapper', 'scrollableDiv')}>
            <div>Search</div>
            
        </div>
    </div> );
}

export default Search;