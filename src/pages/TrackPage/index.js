import classNames from "classnames/bind";

import styles from './TrackPage.module.scss'
import { useContext, useEffect } from "react";
import { NavContext } from "../../App";
import { useLocation } from "react-router-dom";
const cx= classNames.bind(styles)
function TrackPage() {
    //save path name in navList
    const {updateNavList, isBackwarded, updateIsBackwarded}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        if(isBackwarded){
            return
        }
        updateNavList(location.pathname)
        updateIsBackwarded(false)
    },[])
    return ( <div>
        TrackPage
    </div> );
}

export default TrackPage;