import React, { ReactElement, FC } from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

type Props = {
    isAuthenticated: boolean
}

const navigationItems: FC<Props> = ({isAuthenticated}: Props): ReactElement => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {isAuthenticated ?<NavigationItem link="/logout">Logout</NavigationItem>
        : <NavigationItem link="/auth">Authentication</NavigationItem> }
        
    </ul>
);

export default navigationItems;