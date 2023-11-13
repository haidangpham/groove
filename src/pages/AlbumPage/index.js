import classNames from "classnames/bind";
import styles from './AlbumPage.module.scss';
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavContext } from "../../App";
const cx=classNames.bind(styles)
function AlbumPage() {
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        updateNavList(location.pathname)
    },[])
    return ( <div>Album Page</div> );
}

export default AlbumPage;