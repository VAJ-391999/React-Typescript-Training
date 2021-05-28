import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

type Props = {
    isAuthenticated: boolean
}

const navigationItems = ({isAuthenticated}: Props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {isAuthenticated ?<NavigationItem link="/logout">Logout</NavigationItem>
        : <NavigationItem link="/auth">Authenticatio</NavigationItem> }
        
    </ul>
);

export default navigationItems;