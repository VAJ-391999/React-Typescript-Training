import React, { FC, ReactElement } from 'react';
import Toolbar from '../../MenuControl/Navigation/Toolbar/Toolbar';
import LeftSideMenu from '../../MenuControl/LeftSideMenu/LeftSideMenu';
import './Layout.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

type Props = {
    children: any
}

const Layout = (props: Props): ReactElement => {
    return (
        <div className="Layout">
            <Toolbar />
            <LeftSideMenu />
            <main className="main">
                {props.children}
            </main>
        </div>
    );
};

export default Layout;