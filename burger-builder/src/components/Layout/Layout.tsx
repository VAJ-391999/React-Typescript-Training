import React, { useState, FC, ReactElement } from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect, useSelector} from 'react-redux';

type Props = {
    children: any
}

const Layout: FC<Props> = (props: Props): ReactElement =>  {

    const isAuthenticated = useSelector((state: any) => {
        return state.auth.token !== null
    });

    const[sideDrawerIsVisible, setsideDrawerIsVisible] = useState<boolean>(false);

    const sideDrawerCloseHandler = () => {
        setsideDrawerIsVisible(false);
    }

    const slideDrawerToggleClicked = () => {
        setsideDrawerIsVisible(!sideDrawerIsVisible);
    }

    
    return (
        <Aux>
            <ToolBar drawerToggleClicked={slideDrawerToggleClicked} isAuth={isAuthenticated}/>
            <SideDrawer 
                isAuth={isAuthenticated}
                opend={sideDrawerIsVisible}
                closed={sideDrawerCloseHandler}
                />
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

/*const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default connect(mapStateToProps)(Layout);*/
export default Layout;