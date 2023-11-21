import classNames from "classnames/bind";

import styles from './Shelf.module.scss'
import Card from "./Card";
const cx= classNames.bind(styles)
function Shelf({cardList, title, removeable= false, updateCardList}) {

    return (
        <div className={cx('wrapper')}>
            <h2>{title}</h2>
            <div className={cx('container')}>
                {
                    cardList.map((playlistId, index)=>(
                        <Card playlistId={playlistId} key={index} index={index} removeable updateCardList={updateCardList}/>           
                    ))
                }
            </div>
        </div>
    );
}

export default Shelf;