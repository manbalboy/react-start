import React from 'react';
import './Box.css';

export default function Box({ size }) {
    if (size == 'big') {
        return <div className="box big"> 큰박스 </div>;
    } else {
        return <div className="box small"> 작은박스 </div>;
    }
}