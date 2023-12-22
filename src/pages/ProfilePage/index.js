import { useContext, useEffect, useRef } from "react";
import { NavContext } from "../../App";
import { useLocation, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './ProfilePage.module.scss'
import { artists } from "../../assets/data/users";
const cx= classNames.bind(styles)
function ProfilePage() {
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        updateNavList(location.pathname)
    },[location.pathname])
    //get artist data
    const artistId= useParams().artistId
    const artistData= artists.find((artist)=> artist.uniqueId=== artistId)
    const backgroundRef= useRef()
    //
    
    return (
        <div className={cx('wrapper')} >
            <div className={cx('header')} ref={backgroundRef}>
                <div className={cx('avatar')}>
                    <img src={artistData.avatar} className={cx('')} alt=""/>

                </div>
            </div>
            <div className={cx('content')}>

            </div>
            {/* <img className={cx('background-avatar')} alt="" src={artistData.coverImg}/> */}
        </div>
    );
}

export default ProfilePage;