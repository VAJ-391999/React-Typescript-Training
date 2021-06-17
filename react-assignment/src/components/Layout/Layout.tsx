import React, { FC, ReactElement, useState } from 'react';
import Toolbar from '../../MenuControl/Navigation/Toolbar/Toolbar';
import LeftSideMenu from '../../MenuControl/LeftSideMenu/LeftSideMenu';
import './Layout.css';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Grid from '@material-ui/core/Grid';
import SlidDrawer from '../../MenuControl/SlideDrawer/SlidDrawer';


type Props = {
    children: any
}



const Layout = (props: Props): ReactElement => {

    const[sideDrawerIsVisible, setsideDrawerIsVisible] = useState<boolean>(false);

    const sideDrawerCloseHandler = () => {
        setsideDrawerIsVisible(false);
    }

    const slideDrawerToggleClicked = () => {
        setsideDrawerIsVisible(!sideDrawerIsVisible);
    }

    return (
        <div className="Layout">
            <Toolbar drawerToggleClicked={slideDrawerToggleClicked} />
            <SwipeableDrawer
            open={sideDrawerIsVisible}
            onClose={sideDrawerCloseHandler}
            onOpen={slideDrawerToggleClicked}
          >
           <SlidDrawer /> 
          </SwipeableDrawer>
            <div className="float-container">
                <Grid container >
                    <Grid item sm={3} md={2}>
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