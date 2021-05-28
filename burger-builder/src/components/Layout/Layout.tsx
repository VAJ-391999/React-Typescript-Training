import React, { useState, FC } from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

type Props = {
    children: any
}

const Layout = (props) =>  {

    const[sideDrawerIsVisible, setsideDrawerIsVisible] = useState<boolean>(false);

    const sideDrawerCloseHandler = () => {
        setsideDrawerIsVisible(false);
    }

    const slideDrawerToggleClicked = () => {
        setsideDrawerIsVisible(!sideDrawerIsVisible);
    }

    
    return (
        <Aux>
            <ToolBar drawerToggleClicked={slideDrawerToggleClicked} isAuth={props.isAuthenticated}/>
            <SideDrawer 
                isAuth={props.isAuthenticated}
                opend={sideDrawerIsVisible}
                closed={sideDrawerCloseHandler}
                />
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default connect(mapStateToProps)(Layout);