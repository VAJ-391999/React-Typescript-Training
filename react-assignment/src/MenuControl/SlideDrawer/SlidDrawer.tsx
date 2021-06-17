import React from 'react';
import './SlidDrawer.css';
import LeftSideMenu from '../LeftSideMenu/LeftSideMenu';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';


const SlidDrawer = () => {
    return (
        <div className="slidDrawer">
            <Logo />
            <LeftSideMenu />
        </div>
    );
};

export default SlidDrawer;