import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Model.css';

const Model = ({show, children}: {show: boolean, children: any}) => {
    return (
        <>
            <Backdrop show={show} />
            <div className="Model" style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show? '1': '0'
            }}>
               {children} 
            </div>
        </>
    )
};

export default Model;