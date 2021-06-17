import React, { MouseEventHandler, ReactElement, FC} from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../DrawerToggle/DrawerToggle';


type Props = {
    drawerToggleClicked: MouseEventHandler,
}

const Toolbar: FC<Props> = (props: Props): ReactElement => {
    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
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