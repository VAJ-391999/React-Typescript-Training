import React,{MouseEventHandler} from 'react';
import Logo from '../Logo/Logo';
import './ToolBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

type Props = {
    drawerToggleClicked: MouseEventHandler,
    isAuth: boolean
}

const toolbar = ({drawerToggleClicked, isAuth}: Props) => (
    <header className="ToolBar">
        <DrawerToggle clicked={drawerToggleClicked} />
        <div>
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems isAuthenticated={isAuth} />
        </nav>
    </header>
);

export default toolbar;