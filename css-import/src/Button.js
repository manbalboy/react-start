import React from 'react';
import './Button.css';

export default function Button({ size }) {
    if (size == 'big') {
        return <button className="button big"> 큰버튼 </button>;
    } else {
        return <button className="button small"> 작은버튼 </button>;
    }
}