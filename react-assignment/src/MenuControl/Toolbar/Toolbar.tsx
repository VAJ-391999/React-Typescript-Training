import React from 'react';
import './Toolbar.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;