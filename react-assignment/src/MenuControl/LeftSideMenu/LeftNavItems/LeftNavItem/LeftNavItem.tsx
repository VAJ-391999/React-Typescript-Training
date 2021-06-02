import React, { ReactElement, FC } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNavItem.css';

const LeftNavItem = ({children, path}: {children:any, path:string}):ReactElement => {
    return(
        <li className="LeftNavItem">
            <NavLink exact to={path}>
                {children}
            </NavLink>
        </li>
    )
};

export default LeftNavItem;