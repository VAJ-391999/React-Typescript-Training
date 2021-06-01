import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

type Props = {
    link: string,
    children: any
}

const NavigationItem = (props: Props) => {
    return (
        <li className="NavigationItem">
            <NavLink to={props.link} exact>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;