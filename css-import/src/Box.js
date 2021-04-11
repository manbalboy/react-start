import React from 'react';
// import Style from './Box.module.css';
import Style from './Box.module.scss';
import cn from 'classnames';

export default function Box({ size }) {
    /*
    //1. cn 입력 
    if (size == 'big') {
        // return <div className={`${Style.box} ${Style.big}`}> 큰박스 </div>;
        return <div className={cn(Style.box, Style.big)}> 큰박스 </div>;
    } else {
        return <div className={`${Style.box} ${Style.small}`}> 작은박스 </div>;
    }
    */

    //2. cn 비입력

    const isBig = size === 'big';
    return (<div className={cn(Style.box, {
        [Style.big]: isBig,
        [Style.small]: !isBig
    })}> {isBig ? '큰 박스' : '작은 박스 '} </div>)
};