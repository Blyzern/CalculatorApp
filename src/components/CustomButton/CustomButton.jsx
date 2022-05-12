import React from 'react';
import './CustomButton.css';

export const CustomButton = ({ text, onClick,  customClass}) => {
    return <button className={customClass} onClick={onClick} value={text} key={text}>{text}</button>;
    };
    