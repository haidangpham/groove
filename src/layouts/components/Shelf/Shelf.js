import classNames from "classnames/bind";
import { useContext } from "react";

import styles from './Shelf.module.scss';
import mobileStyles from "./ShelfMobile.module.scss";
import { MobileContext } from "../../../App";

import Card from "./Card";

let cx;
function Shelf({cardList, title, removeable= false, updateCardList}) {
    const {isMobileAgent}= useContext(MobileContext)
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <h2>{title}</h2>
            <div className={cx('container')}>
                {
                    cardList.map((playlistId, index)=>(
                        <Card playlistId={playlistId} key={index} index={index} removeable={removeable} updateCardList={updateCardList}/>           
                    ))
                }
            </div>
        </div>
    );
}

export default Shelf;