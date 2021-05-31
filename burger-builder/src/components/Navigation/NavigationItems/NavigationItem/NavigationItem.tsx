import React, { ReactElement, FC } from 'react';
import './NavigationItem.css';
import {NavLink } from 'react-router-dom';

type Props = {
    link: string,
    children: any
}

const navigationItem: FC<Props> = ({link, children}: Props): ReactElement => (
    <li className="NavigationItem">
    
        <NavLink to={link} exact>
            {children}
        </NavLink>
    </li>
)

export default navigationItem;