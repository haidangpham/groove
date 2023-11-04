import classNames from "classnames/bind";
import styles from './PlayButton.module.scss';
import { PauseIcon, PlayIcon } from "../../../components/Icons";
const cx= classNames.bind(styles)
function PlayButton({className, pause=false, small= false, medium= false,large= false, white= false,  ...passprops}) {
    const classes= cx('btn-ctn',{small, medium, large, white}, className)
    const props= {...passprops}
    return (
        <button className={classes} {...props}>
            {pause?<PauseIcon className={cx('icon')}/>:<PlayIcon className={cx('icon')}/>}
        </button>
    );
}

export default PlayButton;