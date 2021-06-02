import React, { FC, ReactElement } from 'react';
import Toolbar from '../../MenuControl/Navigation/Toolbar/Toolbar';
import LeftSideMenu from '../../MenuControl/LeftSideMenu/LeftSideMenu';

type Props = {
    children: any
}

const Layout = (props: Props): ReactElement => {
    return (
        <div>
            <Toolbar />
            <LeftSideMenu />
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;