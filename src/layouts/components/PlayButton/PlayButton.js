import classNames from "classnames/bind";
import styles from './PlayButton.module.scss';
import { PlayIcon } from "../../../components/Icons";
const cx= classNames.bind(styles)
function PlayButton({className, small= false, medium= false,large= false, white= false, ...passprops}) {
    const classes= cx('btn-ctn',{small, medium, large, white}, className)
    const props= {...passprops}
    return (
        <button className={classes} {...props}>
            <PlayIcon className={cx('icon')}/>
        </button>
    );
}

export default PlayButton;