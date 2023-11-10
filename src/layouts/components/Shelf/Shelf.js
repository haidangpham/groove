import classNames from "classnames/bind";

import styles from './Shelf.module.scss'
import Card from "./Card";
const cx= classNames.bind(styles)
function Shelf({cardList, title}) {
    return (
        <div className={cx('wrapper')}>
            <h2>{title}</h2>
            <div className={cx('container')}>
                {
                    cardList.map((playlistId, index)=>(
                        <Card playlistId={playlistId} key={index}/>           
                    ))
                }
            </div>
        </div>
    );
}

export default Shelf;