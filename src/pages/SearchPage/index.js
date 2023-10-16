import classNames from "classnames/bind";
import styles from './Search.module.scss';

const cx= classNames.bind(styles)
function Search() {
    return ( <div>
        <div className={cx('wrapper', 'scrollableDiv')}>
            <div>Search</div>
            
        </div>
    </div> );
}

export default Search;