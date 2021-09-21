import React from 'react';
import Moto from '../CardComponent/Moto/Moto';

const PandCProducts = () => {
    const motoTitle = ['Dashboard', 'P & C Products']; 
    return (
        <div className="PandCProducts" style={{padding:"15px"}}>
            <Moto mototitles={motoTitle} />
        </div>
    );
};

export default PandCProducts;