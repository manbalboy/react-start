import React from 'react';
// import './Button.css';
import Style from'./Button.module.css';

export default function Button({ size }) {
    if (size == 'big') {
        return <button className={`${Style.button} ${Style.big}`}> 큰버튼 </button>;
    } else {
        return <button className={`${Style.button} ${Style.small}`}> 작은버튼 </button>;
    }
}