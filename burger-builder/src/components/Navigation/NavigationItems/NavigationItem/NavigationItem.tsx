import React from 'react';
import './NavigationItem.css';
import {NavLink } from 'react-router-dom';

type Props = {
    link: string,
    children: any
}

const navigationItem = ({link, children}) => (
    <li className="NavigationItem">
    
        <NavLink to={link} exact>
            {children}
        </NavLink>
    </li>
)

export default navigationItem;