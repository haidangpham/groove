import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../App";
import { Link, useLocation } from "react-router-dom";
import Shelf from "../../layouts/components/Shelf/Shelf";
import { genres } from "../../assets/data/genres";

const cx= classNames.bind(styles)
function Search() {
    //save path name in navList
    const {updateNavList}= useContext(NavContext)
    const location= useLocation()
    useEffect(()=>{
        updateNavList(location.pathname)
    },[location.pathname])
    //Recent Searches
    const [recentSearches, setRecentSearches]= useState(['458fa796', 'd839b189', '960fdcff'])
    const updateRecentSearches= (index)=>{
        const newRecentSearches= [...recentSearches]
        newRecentSearches.splice(index, 1)
        setRecentSearches(newRecentSearches)
    }
    //Genre
    
    return ( <div>
        <div className={cx('wrapper')}>
            {recentSearches.length!==0?<Shelf title={'Recent searches'} cardList={recentSearches} removeable updateCardList={updateRecentSearches}/>: <></>}
            <div className={cx('genres')}>
                <h2>Browse all</h2>
                <div className={cx('grid-ctn')}>
                    {
                        genres.map((genre, index)=>(
                            <Link to={''} key={index}>
                            <div className={cx('genre-card')} style={{backgroundColor: genre.themeColor}}>
                                <h2>{genre.title}</h2>
                            </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div> );
}

export default Search;