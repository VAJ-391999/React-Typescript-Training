import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../DrawerToggle/DrawerToggle';

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <DrawerToggle />
            <div>
                <Logo />
            </div>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;