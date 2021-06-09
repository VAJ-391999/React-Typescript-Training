import React from 'react';
import './Backdrop.css';

const Backdrop = ({show}: {show: boolean}) => {
    return (
        show ? <div className="Backdrop"></div> : null
    );
};

export default Backdrop;