import React from 'react';
import classNames from 'classnames/bind';
import styles from './Equaliser.module.scss';

const cx= classNames.bind(styles)
const EqualizerIcon = () => {
  return (
    <div className={cx("equalizer-icon")}>
      <div className={cx("bar","bar1" )}></div>
      <div className={cx("bar","bar2")}></div>
      <div className={cx("bar","bar3")}></div>
      <div className={cx("bar","bar4")}></div>
      <div className={cx("bar","bar5")}></div>
    </div>
  );
};

export default EqualizerIcon;
