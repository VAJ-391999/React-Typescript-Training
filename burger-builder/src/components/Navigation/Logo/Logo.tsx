import React, { ReactElement, FC } from 'react';
import burgerLogo from '../../../asserts/burger-logo.png';
import './Logo.css';

const logo: FC = (): ReactElement => (
    <div className="Logo">
        <img src={burgerLogo} alt="My burger"/>
    </div>
);

export default logo;