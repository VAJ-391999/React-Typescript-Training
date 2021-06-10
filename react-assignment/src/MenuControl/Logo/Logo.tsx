import React, { ReactElement, FC } from 'react';
import reactLogo from '../../logo.svg';
import './Logo.css';

const logo: FC = (): ReactElement => (
    <div className="Logo">
        <img src={reactLogo} alt="My Logo"/>
    </div>
);

export default logo;