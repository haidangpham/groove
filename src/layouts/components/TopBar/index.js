import classNames from "classnames/bind";
import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';

import styles from './TopBar.module.scss';
import { currentUser } from "../../../assets/data/users";
import { BackwardIcon, BellIcon, DownloadIcon, ForwardIcon } from "../../../components/Icons";
import { NavContext } from "../../../App";
const cx=classNames.bind(styles)
function TopBar({forwardedRef}) {
    const{navList, curIndexNav, updateCurIndexNav}= useContext(NavContext)
    const navigate= useNavigate()

    const handleNav= (step)=>{
        updateCurIndexNav(step)
        navigate(navList[curIndexNav + step])
        console.log(curIndexNav + step);
    }

    return ( 
        <div className={cx('top-bar')} ref={forwardedRef}>
                        <div className={cx('history-nav')}>
                            <button className={cx('backward', `${false?'inactive':'active'}`)} onClick={()=>handleNav(-1)}>
                                <BackwardIcon className={cx('icon')}/>
                            </button>
                            <button className={cx('forward','inactive')} onClick={()=>handleNav(1)}>
                                <ForwardIcon className={cx('icon')}/>
                            </button>
                        </div>
                        
                        <div className={cx('options')}>
                           
                            <div className={cx('download')}>
                                <DownloadIcon className={cx('icon')}/>
                                <span>Install App</span>
                            </div>
                            <button className={cx('notification')}><BellIcon className={cx('icon', 'bell')}/> </button> 
                            <button className={cx('profile')}>
                                <img src={currentUser.avatar} alt="user's name"/>
                            </button> 
                        </div>
                    </div>
    );
}

export default TopBar;