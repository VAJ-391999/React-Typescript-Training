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
            <div className="float-container">
                <Grid container >
                    <Grid item xs={12} sm={3} md={2}>
                        <LeftSideMenu />
                    </Grid>
                    <Grid item xs={12} sm={9} md={10}>
                        <main className="main">
                            {props.children}
                        </main>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Layout;