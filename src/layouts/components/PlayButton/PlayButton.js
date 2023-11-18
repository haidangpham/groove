import classNames from "classnames/bind";
import styles from './PlayButton.module.scss';
import { PauseIcon, PlayIcon, PlayIconPrimary } from "../../../components/Icons";
const cx= classNames.bind(styles)
function PlayButton({className, primary= false, pause=false, small= false, medium= false,large= false, white= false,onClick,  ...passprops}) {
    const classes= cx('btn-ctn',{primary, small, medium, large, white}, className)
    const props= {...passprops};
    return (
        <button className={classes} onClick={onClick} {...props}>
            {pause?<PauseIcon className={cx('icon')}/>:<PlayIconPrimary className={cx('icon')}/>}
        </button>
    );
}

export default PlayButton;