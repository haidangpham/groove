import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from './TippyBox.module.scss';
const cx= classNames.bind(styles)
function TipBox({children, content= 'no content'}) {
    return (
        <div>
            <Tippy
                trigger="mouseenter"
                delay= {[400,200]} 
                render={(props)=>(
                    <div className={cx('tippy-wrapper')} {...props}>
                        <span className={cx('content')}>{content}</span>
                    </div>
                )}
            >
                {children}
            </Tippy>
            
        </div>
    );
}

export default TipBox;