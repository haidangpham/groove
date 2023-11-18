import { useContext, useEffect } from "react";
import { NavContext } from "../../App";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './ProfilePage.module.scss'
const cx= classNames.bind(styles)
function ProfilePage() {
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        updateNavList(location.pathname)
    },[location.pathname])
    return ( <div>Profile Page</div> );
}

export default ProfilePage;